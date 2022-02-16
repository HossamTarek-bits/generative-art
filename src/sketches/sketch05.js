import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
export const Sketch05 = () => {
    const colors = ["#5800FF", "#E900FF", "#FFC600"];
    const { step, strokeWeight,frameRate } = useTweaks({
        step: { value: 15, min: 1, max: 100, step: 1 },
        strokeWeight: {
            value: 2,
            min: 1,
            max: 30,
            step:1
        },
        frameRate: {value:30,min:1,max:60,step:1}
    });
    function sketch(p5) {
        let width = p5.windowWidth * 0.9;
        let height = p5.windowHeight * 0.9;
        let x = Math.floor(width/2);
        let y = Math.floor(height/2);
        let r;
        let pos = p5.createVector(x,y);
        let prevPos = p5.createVector(x,y);
        p5.setup = function () {
            p5.createCanvas(width, height,p5.WEBGL);
            p5.frameRate(frameRate)
        };

        p5.draw = function () {
            p5.translate(-width/2,-height/2)
            p5.stroke(p5.color(p5.random(colors)));
            p5.strokeWeight(strokeWeight);

            r = Math.floor(p5.random(0,4))  
            switch(r){
                case 0:
                    x+=step;
                    x = Math.min(width,x)
                    break;
                case 1:
                    x-=step;
                    x = Math.max(0,x)
                    break;
                case 2:
                    y+=step;
                    y = Math.min(height,y)
                    break;
                case 3:
                    y-=step;
                    y = Math.max(0,y)
                    break;
                default:
                    break;
            }
            prevPos = pos
            pos = p5.createVector(x,y);
            p5.line(prevPos.x,prevPos.y,pos.x,pos.y)
        };
    }
    
    return <ReactP5Wrapper sketch={sketch} />;
};
