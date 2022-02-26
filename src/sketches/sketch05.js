import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useTweaks } from "use-tweaks";
export const Sketch05 = () => {
    const colors = ["#5800FF", "#E900FF", "#FFC600"];
    const { step, strokeWeight,frameRate,followMouseProbability } = useTweaks({
        step: { value: 15, min: 1, max: 100, step: 1 },
        strokeWeight: {
            value: 2,
            min: 1,
            max: 30,
            step:1
        },
        frameRate: {value:30,min:1,max:60,step:1},
        followMouseProbability:{value:13,min:0,max:100,step:1}
    });

    const drawFollowMouse = (p5,pos)=>{
        const mouseVec = p5.createVector(p5.mouseX,p5.mouseY);
        mouseVec.sub(pos).normalize().mult(step)
        p5.push()
        p5.translate(pos.x,pos.y);
        p5.line(0,0,mouseVec.x,mouseVec.y)
        p5.pop()
        pos.add(mouseVec)
    }

    const drawRandom = (p5,pos,width,height)=>{
        let x = pos.x;
        let y = pos.y;
        const r = Math.floor(p5.random(0,4))
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
        p5.line(pos.x,pos.y,x,y)
        pos.set(x,y)
    }

    function sketch(p5) {
        const width = p5.windowWidth * 0.6;
        const height = p5.windowHeight * 0.6;
        const pos = p5.createVector(Math.floor(width/2),Math.floor(height/2));
        
        p5.setup = function () {
            p5.createCanvas(width, height,p5.WEBGL);
            p5.frameRate(frameRate)
        };

        p5.draw = function () {
            p5.translate(-width/2,-height/2)
            p5.stroke(p5.color(p5.random(colors)));
            p5.strokeWeight(strokeWeight);
            
            const followMouse = p5.random(100);
            if(followMouse < followMouseProbability)
                drawFollowMouse(p5,pos)
            else
                drawRandom(p5,pos,width,height)


        };
    }
    
    return <ReactP5Wrapper sketch={sketch} />;
};
