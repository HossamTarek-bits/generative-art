import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";

export const Sketch04 = () => {
    // const colors = ["#3E065F", "#700B97", "#8E05C2"];
    const { strokeWeight, color,finalSize,minStartSteps,maxStartSteps} = useTweaks({
        strokeWeight: {
            value: Math.floor(Math.random() * 3) + 1,
            min: 1,
            max: 10,
        },
        color: "#4f87bc",
        finalSize : {
          value: 3,
          min:1,
          max:3
        },
        minStartSteps:{
          value:2,
          min:2,
          max:10
        },
        maxStartSteps:{
          value:3,
          min:3,
          max:30
        }
    });
    
    const sketch = (p5) => {
      let width = p5.windowWidth * 0.9;
      let height = p5.windowHeight * 0.9;

        p5.setup = function () {
            p5.createCanvas(width, height);
            p5.strokeWeight(strokeWeight);
            
            p5.stroke(color)
            p5.fill(0,0,0)
            const offset = 2
            let startSteps;
            const tileStep = (height - offset * 2) / 7;
            const startSize = tileStep;
            const directions = [-1, 0, 1];

            function draw(x, y, width, height, xMovement, yMovement, steps) {
              
              p5.rect(x, y, width, height);

              if(steps >= 0) {
                var newSize = (startSize) * (steps / startSteps) + finalSize;
                var newX = x + (width - newSize) / 2
                var newY = y + (height - newSize) / 2
                newX = newX - ((x - newX) / (steps + 2)) * xMovement
                newY = newY - ((y - newY) / (steps + 2)) * yMovement
                draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
              }
            }

            for( var x = offset; x < width - offset; x += tileStep) {
              for( var y = offset; y < height - offset; y += tileStep) {
                startSteps = minStartSteps + Math.ceil(Math.random() * maxStartSteps)
                var xDirection = directions[Math.floor(Math.random() * directions.length)]
                var yDirection = directions[Math.floor(Math.random() * directions.length)]
                draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
              }
            }
        };
        p5.draw = function () {
            
        };
    };
    return <ReactP5Wrapper sketch={sketch} />;
};
