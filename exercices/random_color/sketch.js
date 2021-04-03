const loadScript = (onLoad) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = '../../js/colorUtils.js';
    script.onload = onLoad;

    document.getElementsByTagName('head')[0].appendChild(script);
}

const sketch = (p5) => {
    const size = 5, arr = {};
    let progress = 0;
    p5.setup = () => {
        p5.createCanvas(700, 500);
        p5.background(0);
        p5.noStroke();

        for(let x = 0; x < p5.width; x += size){
            arr[x] = {};
            for(let y = 0; y < p5.height; y += size){
                arr[x][y] = p5.color(...Object.values(goldenRandom(Math.random(), 0.80,0.95)));
                
            }
        }
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
