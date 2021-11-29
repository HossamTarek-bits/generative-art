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
