import DNA from './DNA';

export default class Population {
    constructor(target, mutationRate, popMax, x, y) {
        this.target = target;
        this.mutationRate = mutationRate;
        this.popMax = popMax;
        this.population = [];
        this.matingPool = [];
        this.numOfGens = 0;
        this.averageFit = 0;
        for (let i =0; i< popMax; i++) {
            this.population.push(new DNA(target, mutationRate, null, x?x:0, y?y:0));
        }
        this.best = this.population[0];
        this.calculateFitness();
    }

    calculateFitness() {
        this.best = this.population[0];
        this.population.forEach((e) => {
            e.calculateFitness();
            if (e.fitness > this.best.fitness) {
                this.best = e;
            }
            this.averageFit += e.fitness;
        });
        this.averageFit/=this.population.length;
    }

    generate() {
        this.matingPool = [];
        let maxFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > maxFitness) {
                maxFitness = this.population[i].fitness;
            }
        }
        for (let i = 0; i<this.population.length; i++) {
            const n = Math.floor(this.population[i].fitness/maxFitness*100);
            for (let j = 0; j < n; j++) {
                this.matingPool.push(this.population[i]);
            }
        }
    }

    newGen() {
        for (let i = 0; i<this.population.length; i++) {
            const midPoint = Math.floor(Math.random()*this.target.length);
            const parentA = this.matingPool[Math.floor(Math.random()*this.matingPool.length)];
            const parentB = this.matingPool[Math.floor(Math.random()*this.matingPool.length)];
            this.population[i].midpoint = midPoint;
            for (let j = 0; j<this.population[i].value.length; j++) {
                if (j<midPoint) this.population[i].value[j] = parentA.value[j];
                else this.population[i].value[j]=parentB.value[j];
                const r = Math.random();
                if (r<this.mutationRate) {
                    this.population[i].value[j] = this.population[i].createRandom(1);
                }
            }
        }
        this.numOfGens+=1;
    }
    getBest() {
        return this.best.value.join('');
    }
    getAverageFit() {
        return this.averageFit.toFixed(2);
    }
    getNumOfGens() {
        return this.numOfGens;
    }
    update(step) {
        this.population.forEach((e) => e.updatePoint(step));
    }
    draw(p5) {
        this.population.sort((a, b)=>a.fitness - b.fitness);
        for (let i = this.population.length-1; i>=Math.max(this.population.length-501, 0); i--) {
            this.population[i].draw(p5);
        }
    }
}
