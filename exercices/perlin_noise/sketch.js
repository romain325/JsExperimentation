const sketch = (p5) => {
    let phase = 0, offset = 0, noiseMax, octave, ampFallOff;
    p5.setup = () => {
        p5.createCanvas(700, 500);
        noiseMax = p5.createSlider(0, 10, 3, 0.1);
        octave = p5.createSlider(1,6,4,1);
        ampFallOff = p5.createSlider(0,1,0.5,0.1);
    }

    p5.draw = () => {
        p5.background(0)
        p5.translate(p5.width/2,p5.height/2);
        p5.stroke(255);
        p5.strokeWeight(2);
        p5.noFill();

        p5.beginShape();
        for(let p = 0; p < Math.PI *2; p += p5.radians(5)){
            let xoff = p5.map(p5.cos(p + phase), -1, 1, 0, noiseMax.value()),
                yoff = p5.map(p5.sin(p + phase), -1, 1, 0, noiseMax.value()),
                radius = p5.map(perlin_noise(xoff, yoff, offset, octave.value(), ampFallOff.value()), 0, 1, 100, p5.height /2),
                x = radius * p5.cos(p),
                y = radius * p5.sin(p);

                p5.vertex(x,y);
        }

        p5.endShape();
        phase += 0.003;
        offset += 0.01;
    }
}

const loadScript = (onLoad) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = '../../js/perlin.js';
    script.onload = onLoad;

    document.getElementsByTagName('head')[0].appendChild(script);
}


loadScript(() => {new p5(sketch, 'canvasContent')});
