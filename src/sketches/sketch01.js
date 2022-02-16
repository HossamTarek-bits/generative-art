import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
export const Sketch01 = () => {
    const colors = ["#3E065F", "#700B97", "#8E05C2"];
    const { step, strokeWeight, color } = useTweaks({
        step: { value: 64, min: 5, max: 100, step: 1 },
        strokeWeight: {
            value: Math.floor(Math.random() * 3) + 1,
            min: 1,
            max: 30,
        },
        color: colors[Math.floor(Math.random() * 3)],
    });
    function sketch(p5) {
        let width = p5.windowWidth * 0.9;
        let height = p5.windowHeight * 0.9;
        const draw = (p5, x, y, width, height) => {
            const leftToRight = p5.random([false, true]);
            p5.stroke(color);
            p5.strokeWeight(strokeWeight);
            if (leftToRight) p5.line(x, y, x + width, y + height);
            else p5.line(x + width, y, x, y + height);
        };

        p5.setup = function () {
            p5.createCanvas(width, height);
            for (var x = 0; x < width; x += step) {
                for (var y = 0; y < width; y += step) {
                    draw(p5, x, y, step, step);
                }
            }
        };

        p5.draw = function () {};
    }

    return <ReactP5Wrapper sketch={sketch} />;
};
