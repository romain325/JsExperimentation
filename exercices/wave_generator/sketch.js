

const sketch = (p5) => {
    let progressSlider, nbWave, speed, progress, saveBtn;
    const arr = [];

    const createArr = () => {
        progress = Array(nbWave.value()).fill(0);

        for(let wave = 0; wave < nbWave.value(); wave++){
            arr[wave] = [];
            for(let x = 0; x < p5.width; x++){
                arr[wave][x] = p5.map(p5.noise(progress[wave]),0,1,0,p5.height/2);
                progress[wave] += (progressSlider.value() * (wave+1));
            }
        }
    }

    const makeProgress = (wave) => {
        for(let i  = 0; i < speed.value(); i++){
            arr[wave].shift();
            arr[wave].push(p5.map(p5.noise(progress[wave]),0,1,0,p5.height/2));
            progress[wave] += (progressSlider.value() * (wave+1));    
        }
    }

    p5.setup = () => {
        p5.createCanvas(700, 500);
        p5.strokeWeight(5);
        p5.colorMode(p5.HSL);


        progressSlider = p5.createSlider(0.001,0.005,0.0005,0.0001);
        nbWave = p5.createSlider(1,5,3);
        nbWave.input(createArr);
        speed = p5.createSlider(1,5,2);
        saveBtn = p5.createButton('Save to SVG');
        saveBtn.mousePressed(() => {p5.save("wave.svg")});

        createArr();
    }

    p5.draw = () => {
        p5.background(0,0,30);
        p5.beginShape();

        for(let wave = 0; wave < nbWave.value(); wave++){
            makeProgress(wave);
            for(let x = 0; x < p5.width; x++){
                p5.stroke(280 + wave*10, 100, 25);
                p5.line(x,p5.height/2 - arr[wave][x] + p5.map(wave,0,nbWave.value(), 0, p5.height/2),x,p5.height);
            }
        }



        p5.endShape();
    }
}

const loadScript = (onLoad) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = '../js/p5.svg.js';
    script.onload = onLoad;

    document.getElementsByTagName('head')[0].appendChild(script);
}


loadScript(() => {new p5(sketch, 'canvasContent')});