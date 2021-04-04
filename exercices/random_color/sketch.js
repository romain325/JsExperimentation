const loadScript = (onLoad) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = '../js/colorUtils.js';
    script.onload = onLoad;

    document.getElementsByTagName('head')[0].appendChild(script);
}

const sketch = (p5) => {
    const size = 5, arr = {};
    let progressX = 0,  progressY = 0, slider, saturation, value;

    const updateGenerated = () => {
        for(let x = 0; x < p5.width; x += size){
            arr[x] = {};
            for(let y = 0; y < p5.height; y += size){
                arr[x][y] = p5.color(...Object.values(goldenRandom(p5.noise(progressX,progressY), saturation.value(), value.value())));
                progressY += slider.value();
            }
            progressX += slider.value();
            progressY = 0;
        }
    }

    p5.setup = () => {
        p5.createCanvas(700, 500);
        p5.background(0);
        p5.noStroke();
        slider = p5.createSlider(0,1,0.3,0.01);

        saturation = p5.createSlider(0,1,0.35,0.01);
        value = p5.createSlider(0,1,0.45,0.01);

        slider.input(updateGenerated);
        saturation.input(updateGenerated);
        value.input(updateGenerated);

        updateGenerated();
    }

    p5.draw = () => {
        p5.beginShape();
        for(let x = 0; x < p5.width; x += size){
            for(let y = 0; y < p5.height; y += size){
                p5.fill(arr[x][y]);
                p5.square(x, y, size);
            }
        }

        p5.endShape();
    }
}

loadScript(() => {new p5(sketch, 'canvasContent')});
