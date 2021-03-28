const sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(700, 500)
    }

    p5.draw = () => {
        p5.background(0)
    }
}
new p5(sketch, 'canvasContent')