function setup(){
    const canvas = createCanvas(700, 500);
    canvas.parent("canvasContent")

    readTextFile('README.md', (data) => {
        document.getElementById('mdContent').innerHTML = marked(data)
    })
}

function draw(){
    background(0)
}