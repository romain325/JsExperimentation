const sketch = (p5) => {
    //Gravity
    const g = 1;
    // Pendulum length & node mass
    let prevX = -1, prevY = -1;

    class Pendulum {
        constructor(name,length,mass,val,velocity,acc_calculus){
            this.name = name;
            // pendulum length
            this.length = length;
            //pendulum mass
            this.mass = mass;
            // pendulum angle
            this.val = val;
            //pendulum velocity
            this.velocity = velocity;
            // acceleration method
            this.accelerate = (other) => {
                return acc_calculus(this,other)
            };
        }
        update(other) {
            //console.log(this.name + ": " + this.accelerate(other))
            this.velocity += this.accelerate(other);
            this.val += this.velocity;

            this.velocity *= 0.999;
        }
    }

    const a1_accelerate = (a1,a2) => {
        const   p1 = -g * ( 2 * a1.mass + a2.mass ) * p5.sin(a1.val),
                p2 = -a2.mass * g * p5.sin(a1.val - 2 * a2.val),
                p3 = -2 * p5.sin(a1.val - a2.val) * a2.mass,
                p4 = a2.velocity * a2.velocity * a2.length + a1.velocity * a1.velocity * a1.length * p5.cos(a1.val - a2.val),
                denominator = a1.length * (2 * a1.mass + a2.mass - a2.mass * p5.cos(2*a1.val - 2*a2.val));
        return ((p1 + p2 + p3 * p4) / denominator);
    }

    const a2_accelerate = (a2,a1) => {
        const   p1 = 2 * p5.sin(a1.val - a2.val),
                p2 = (a1.velocity * a1.velocity * a1.length * (a1.mass + a2.mass)),
                p3 = g * (a1.mass + a2.mass) * p5.cos(a1.val),
                p4 = a2.velocity * a2.velocity * a2.length * a2.mass * p5.cos(a1.val - a2.val),
                denominator = a2.length * (2 * a1.mass + a2.mass - a2.mass * p5.cos(2*a1.val - 2*a2.val));
        return ((p1 * (p2 + p3 + p4)) / denominator);
    }

    // Initial angles
    const a1 = new Pendulum("a1",150,15,Math.PI/2,0, a1_accelerate), 
        a2 = new Pendulum("a2",150,15,Math.PI/2,0, a2_accelerate);
    let buffer;



    p5.setup = () => {
        p5.createCanvas(700, 500)
        p5.strokeWeight(2)
        buffer = p5.createGraphics(p5.width,p5.height)
        buffer.stroke(0)
        buffer.strokeWeight(2)
        buffer.translate(p5.width/2,p5.height/4)
    }

    const drawPendulum = (x1,y1,x2,y2,m) => {
        p5.line(x1,y1,x2,y2)
        p5.fill(0)
        p5.ellipse(x2,y2,m,m)
    }

    p5.draw = () => {
        p5.background(150)
        p5.image(buffer,0,0,p5.width, p5.height)

        p5.translate(p5.width/2,p5.height/4)

        const   x1 = a1.length * p5.sin(a1.val),
                y1 = a1.length * p5.cos(a1.val),
                x2 = x1 + a2.length * p5.sin(a2.val),
                y2 = y1 + a2.length * p5.cos(a2.val);

        drawPendulum(0,0,x1,y1,a1.mass)
        drawPendulum(x1,y1,x2,y2,a2.mass)

        a1.update(a2); a2.update(a1);

        // Draw our path
        if (p5.frameCount > 1) {
            buffer.line(prevX,prevY,x2,y2);
        }
        prevX = x2;
        prevY = y2;

    }
}
new p5(sketch, 'canvasContent')