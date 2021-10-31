import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
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

    class Agent {
        radius;
        pos;
        vel;
        constructor(p5, x, y) {
            this.radius = Math.floor(p5.random(radiusMin, radiusMax));
            this.pos = p5.createVector(x, y);
            this.vel = p5.createVector(
                p5.random(-1, 1) * speed,
                p5.random(-1, 1) * speed
            );
        }

        update() {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        }

        bounce(width, height) {
            if (
                this.pos.x - this.radius <= 0 ||
                this.pos.x + this.radius >= width
            )
                this.vel.x *= -1;
            if (
                this.pos.y - this.radius <= 0 ||
                this.pos.y + this.radius >= height
            )
                this.vel.y *= -1;
        }

        draw(p5) {
            p5.stroke(color);
            p5.noFill();
            p5.strokeWeight(strokeWeight);
            p5.ellipse(this.pos.x, this.pos.y, this.radius);
        }
    }

    const sketch = (p5) => {
        let width = p5.windowHeight * 0.8;
        let height = p5.windowHeight * 0.8;
        const points = [];

        p5.setup = function () {
            for (let i = 0; i < num; i++) {
                points.push(
                    new Agent(p5, p5.random(0, width), p5.random(0, height))
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
