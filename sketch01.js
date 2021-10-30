const pane = new Tweakpane.Pane();
const colors = ["#3E065F", "#700B97", "#8E05C2"];
const PARAMS = {
    step: 64,
    strokeWeight: Math.floor(Math.random() * 3) + 1,
    color: colors[Math.floor(Math.random() * 3)],
};

const draw = (context, x, y, width, height) => {
    const leftToRight = context.random([false, true]);
    context.stroke(PARAMS.color);
    context.strokeWeight(PARAMS.strokeWeight);
    if (leftToRight) context.line(x, y, x + width, y + height);
    else context.line(x + width, y, x, y + height);
};

const s = (context) => {
    const canvas = document.getElementById("canvas");
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const step = PARAMS.step;
    console.log(width);

    context.setup = function () {
        context.createCanvas(width, height);
        for (var x = 0; x < width; x += step) {
            for (var y = 0; y < width; y += step) {
                draw(context, x, y, step, step);
            }
        }
    };

    context.draw = function () {};
};

let myp5 = new p5(s, "canvas");
pane.addInput(PARAMS, "step", { min: 1, max: 100, step: 1 }).on(
    "change",
    () => {
        myp5.remove();
        myp5 = new p5(s, "canvas");
    }
);
pane.addInput(PARAMS, "strokeWeight", { min: 1, max: 30 }).on("change", () => {
    myp5.remove();
    myp5 = new p5(s, "canvas");
});
pane.addInput(PARAMS, "color", { options: colors }).on("change", () => {
    myp5.remove();
    myp5 = new p5(s, "canvas");
});
