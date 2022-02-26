import React from 'react';
import {ReactP5Wrapper} from 'react-p5-wrapper';
import {useTweaks} from 'use-tweaks';
import Population from '../Models/sketch06/Population';
export const Sketch06 = () => {
    const colors = '#08D9D6';
    const {strokeWeight, frameRate, step, mutationRate, populationMax, targetPhrase} = useTweaks({
        strokeWeight: {
            value: 3,
            min: 1,
            max: 30,
            step: 1,
        },
        frameRate: {value: 30, min: 1, max: 60, step: 1},
        step: {value: 300, min: 10, max: 500, step: 10},
        mutationRate: {value: 0.01, min: 0, max: 1, step: 0.01},
        populationMax: {value: 2000, min: 10, max: 40000, step: 10},
        targetPhrase: 'If science is to progress, what we need is the ability to experiment.',

    });

    function sketch(p5) {
        const width = p5.windowWidth * 0.8;
        const height = p5.windowHeight * 0.8;
        const population = new Population(targetPhrase, mutationRate, populationMax, 0, 0);
        const bestPhrase = p5.createP('Best phrase:');
        const averageFit = p5.createP('Average Fitness:');
        const numOfGens = p5.createP('Number of gens:');
        const title = p5.createA('https://en.wikipedia.org/wiki/Infinite_monkey_theorem#:~:text=The%20infinite%20monkey%20theorem%20states,an%20infinite%20number%20of%20times.', 'Infinite monkey theorem - Genetic Algorithm');
        p5.setup = function() {
            p5.createCanvas(width, height, p5.WEBGL);
            p5.frameRate(frameRate);
            p5.stroke(255);
            p5.strokeWeight(strokeWeight);
            title.position(p5.windowWidth/3, p5.windowHeight-200);
            bestPhrase.position(0, 0);
            bestPhrase.class('best');
            averageFit.position(width/2, 0);
            averageFit.class('best');
            numOfGens.position(2*width/3, 0);
            numOfGens.class('best');
            console.log(population);
        };

        p5.draw = function() {
            p5.stroke(p5.color(colors));
            population.generate();
            population.newGen();
            population.calculateFitness();
            population.update(step);
            const best = population.getBest();
            bestPhrase.html('Best phrase:<br>' + best);
            const average = population.getAverageFit();
            averageFit.html('Average Fitness:<br>' + average);
            const num = population.getNumOfGens();
            numOfGens.html('Number of gens:<br>' + num);
            population.draw(p5);
            if (best === targetPhrase) p5.noLoop();
        };
    }

    return <ReactP5Wrapper sketch={sketch} />;
};
