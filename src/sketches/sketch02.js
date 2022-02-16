import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
import { RandomMovingPoint } from "../Models/RandomMovingPoint";
export const Sketch02 = () => {
    const colors = ["#3E065F", "#700B97", "#8E05C2"];
    const { num, speed, radiusMin, radiusMax, strokeWeight, color, distance } =
        useTweaks({
            num: { value: 30, min: 1, max: 100, step: 1 },
            speed: { value: 1, min: 1, max: 30 },
            radiusMin: { value: 15, min: 1, max: 30 },
            radiusMax: { value: 30, min: 30, max: 300 },
            strokeWeight: {
                value: Math.floor(Math.random() * 3) + 1,
                min: 1,
                max: 30,
            },
            color: colors[Math.floor(Math.random() * 3)],
            distance: { value: 300, min: 1, max: 1000 },
        });

    const sketch = (p5) => {
        let width = p5.windowWidth * 0.9;
        let height = p5.windowHeight * 0.9;
        const points = [];

        p5.setup = function () {
            for (let i = 0; i < num; i++) {
                points.push(
                    new RandomMovingPoint(
                        p5,
                        p5.random(0, width),
                        p5.random(0, height),
                        radiusMin,
                        radiusMax,
                        speed,
                        color,
                        strokeWeight
                    )
                );
            }
        };

        p5.draw = function () {
            p5.createCanvas(width, height);

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const d = p5.dist(
                        points[i].pos.x,
                        points[i].pos.y,
                        points[j].pos.x,
                        points[j].pos.y
                    );
                    if (d >= distance) continue;
                    p5.stroke(color);
                    p5.strokeWeight(1);
                    p5.line(
                        points[i].pos.x,
                        points[i].pos.y,
                        points[j].pos.x,
                        points[j].pos.y
                    );
                }
                points[i].update();
                points[i].draw(p5);
                points[i].bounce(width, height);
            }
        };
    };

    return <ReactP5Wrapper sketch={sketch} />;
};
