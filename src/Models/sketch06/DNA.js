export default class DNA {
    constructor(target, mutationRate, value, x, y) {
        this.target = target.split('');
        this.mutationRate = mutationRate;
        this.possibleCombo = '1234567890-=!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;\'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>? ';
        this.value = value?value.split(''):this.createRandom(target.length).split('');
        this.fitness;
        this.x = x;
        this.y = y;
        this.xFit = 0;
        this.yFit = 0;
        this.midpoint;
    }

    createRandom(length) {
        let result = '';
        for (let i =0; i<length; i++) {
            result += this.possibleCombo.charAt(Math.floor(Math.random()*this.possibleCombo.length));
        }
        return result;
    }

    calculateFitness() {
        this.fitness = 0;
        this.xFit = 0;
        this.yFit = 0;
        for (let i =0; i<this.value.length; i++) {
            if (this.target[i] === this.value[i]) {
                this.fitness+=1;
                if (i<this.midpoint) this.xFit+=1;
                else this.yFit-=1;
            } else {
                if (i<this.midpoint) this.xFit-=1;
                else this.yFit+=1;
            }
        }
        this.fitness/=this.value.length;
        this.xFit /= this.midpoint;
        this.yFit /= (this.value.length - this.midpoint);
    }
    updatePoint(step) {
        this.x = this.xFit *step;
        this.y = this.yFit *step;
    }
    draw(p5) {
        // p5.point(this.x, this.y);
        p5.circle(this.x, this.y, 1);
    }
}
