export class RandomMovingPoint {
    constructor(
        p5,
        x,
        y,
        radiusMin = 15,
        radiusMax = 30,
        speed = 1,
        color = "#3E065F",
        strokeWeight = 3
    ) {
        this.radius = Math.floor(p5.random(radiusMin, radiusMax));
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(
            p5.random(-1, 1) * speed,
            p5.random(-1, 1) * speed
        );
        this.color = color;
        this.strokeWeight = strokeWeight;
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    bounce(width, height) {
        if (this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= width)
            this.vel.x *= -1;
        if (this.pos.y - this.radius <= 0 || this.pos.y + this.radius >= height)
            this.vel.y *= -1;
    }

    draw(p5) {
        p5.stroke(this.color);
        p5.noFill();
        p5.strokeWeight(this.strokeWeight);
        p5.ellipse(this.pos.x, this.pos.y, this.radius);
    }
}
