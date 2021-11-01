import { delay } from "q";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
export const Sketch03 = () => {
    const colors = ["#3E065F", "#700B97", "#8E05C2"];
    const { maxRadius, strokeWeight, color } = useTweaks({
        maxRadius: { value: 300, min: 30, max: 3000, step: 10 },
        strokeWeight: {
            value: Math.floor(Math.random() * 3) + 1,
            min: 1,
            max: 30,
        },
        color: colors[Math.floor(Math.random() * 3)],
    });
    class Circle {
        constructor(x, y, radius, color, strokeWeight) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.strokeWeight = strokeWeight;
        }

        draw(p5) {
            p5.stroke(this.color);
            p5.noFill();
            p5.strokeWeight(this.strokeWeight);
            p5.ellipse(this.x, this.y, this.radius * 2);
        }
    }
    const sketch = (p5) => {
        const size = p5.windowHeight * 0.8;
        const minRadius = 5;
        // const maxRadius = 3000;
        const createCircleAttempts = 300;
        const totalCircles = size;
        const circles = [];
        function createAndDrawCircle() {
            let newCircle;
            let circleSafeToDraw = false;
            for (let tries = 0; tries < createCircleAttempts; tries++) {
                newCircle = new Circle(
                    Math.floor(Math.random() * size),
                    Math.floor(Math.random() * size),
                    minRadius,
                    color,
                    strokeWeight
                );

                if (doesCircleHaveACollision(newCircle)) {
                    continue;
                } else {
                    circleSafeToDraw = true;
                    break;
                }
            }

            if (!circleSafeToDraw) {
                return;
            }

            for (
                let radiusSize = minRadius;
                radiusSize <= maxRadius;
                radiusSize++
            ) {
                newCircle.radius = radiusSize;
                if (doesCircleHaveACollision(newCircle)) {
                    newCircle.radius--;
                    break;
                }
            }

            circles.push(newCircle);

            newCircle.draw(p5);
        }

        function doesCircleHaveACollision(circle) {
            for (let i = 0; i < circles.length; i++) {
                if (circle === circles[i]) return false;
                let otherCircle = circles[i];
                let a = circle.radius + otherCircle.radius;
                let x = circle.x - otherCircle.x;
                let y = circle.y - otherCircle.y;

                if (a >= Math.sqrt(x * x + y * y)) {
                    return true;
                }
            }

            if (
                circle.x + circle.radius >= size ||
                circle.x - circle.radius <= 0
            ) {
                return true;
            }

            if (
                circle.y + circle.radius >= size ||
                circle.y - circle.radius <= 0
            ) {
                return true;
            }

            return false;
        }

        p5.setup = function () {
            p5.createCanvas(size, size);
            for (let i = 0; i < totalCircles; i++) {
                createAndDrawCircle();
            }
        };
        p5.draw = function () {};
    };

    return <ReactP5Wrapper sketch={sketch} />;
};
