const loadScript = (onLoad) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = '../../js/perlin_flow/particle.js';
    script.onload = onLoad;

    document.getElementsByTagName('head')[0].appendChild(script);
}

const sketch = (p5) => {
    const particles = [], scale = 10, increase = 0.1;
    let flowfields, rows, cols, zoff = 0;

    p5.setup = () => {
        p5.createCanvas(700, 500)
        rows = Math.floor(p5.height / scale); cols = Math.floor(p5.width / scale);
        flowfields = new Array(rows*cols);
        for (let i = 0; i < 300; i++) {
            particles[i] = new Particle();
        }
        p5.background(0)
    }

    p5.draw = () => {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            const index = x + y * cols;
            const angle = p5.noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
            p5.stroke(0, 50);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
          }
          yoff += inc;
      
          zoff += 0.0003;
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].edges();
            particles[i].show();
          }
    }
}

loadScript(() => {new p5(sketch, 'canvasContent')});