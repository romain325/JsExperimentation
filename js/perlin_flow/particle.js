class Particle {
    constructor() {
        this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.vel = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
        this.maxspeed = 4;
        this.prevPos = this.pos.copy();
    }
  
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
  
    follow(vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }
  
    applyForce(force) {
        this.acc.add(force);
    }
  
    show() {
        p5.stroke(255, 10);
        p5.strokeWeight(1);
        p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
  
    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
  
    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }  
}