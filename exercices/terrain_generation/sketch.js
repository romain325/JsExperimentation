const sketch = (p5) => {

    const gridScale = 20;
    const gridWidth = 1400;
    const gridHeight = 1000;
    const   nRow =  gridHeight / gridScale, 
            nCol = gridWidth / gridScale,
            viewY = nRow/2,
            viewX = nCol/2;

    let aura;
    let terrain = []; //= new Array(nCol).fill(new Array(nRow).fill(0));
    let strokeColor = [0,0,0];

    let movement = 0;

    p5.setup = () => {
        p5.createCanvas(700, 500, p5.WEBGL);
        for (var x = 0; x < nCol; x++) {
            terrain[x] = [];
            for (var y = 0; y < nRow; y++) {
                terrain[x][y] = 0;
            }
        }
        aura = p5.createSlider(0,6, 4, 1);

        p5.fill(8,44,127,150);
        p5.stroke(0,255,248,150);
    }

    p5.draw = () => {
        p5.background(0,0,0,100); 

        movement -= 0.075;


        let yoff = movement;
        for(let y = 0; y < nRow; y++){
            let xoff = 0;
            for(let x = 0; x < nCol; x++){
                terrain[x][y] = p5.map(p5.noise(xoff, yoff), 0, 1, -100, 100);
                if(y > nRow - nRow/3 - 4 && x > nCol - nCol /2 -4 && x < nCol - nCol /2 + 4){
                }

                if(x < viewX + aura.value() && x > viewX - aura.value()){
                    terrain[x][y] /= 4;
                }

                xoff += 0.2;
            }
            yoff += 0.2;
        }
        
        p5.translate(0,50);
        // Give the up view effect
        p5.rotateX(Math.PI /3);
        p5.translate(-gridWidth/2, -gridHeight/2);

        for(let y = 0; y < nRow -1; y++){
            p5.beginShape(p5.TRIANGLE_STRIP);
            for (let x = 0; x < nCol; x++) {
                let inMiddle = x < viewX + aura.value() && x > viewX - aura.value()

                if(inMiddle){
                    p5.stroke(0);
                    p5.fill(0,29,50);
                }

                p5.vertex(x * gridScale, y * gridScale, terrain[x][y]);
                p5.vertex(x * gridScale, (y + 1) * gridScale, terrain[x][y + 1]);
                
                if(inMiddle){
                    p5.stroke(0,255,248,150);
                    p5.fill(8,44,127,150);
                }
            }
            p5.endShape();
        }

    }
}
new p5(sketch, 'canvasContent')