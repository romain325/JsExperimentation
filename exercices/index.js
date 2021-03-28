window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if(!urlParams.has("ex")){
        window.location.replace("/listing.html");
    }
    
    const exercice = urlParams.get("ex");
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = exercice + '/sketch.js';
    
    document.getElementsByTagName('head')[0].appendChild(script);

    readTextFile(exercice + '/README.md', (data) => {document.getElementById('mdIntro').innerHTML = marked(data)});
    readTextFile(exercice + '/content.md', (data) => {document.getElementById('mdContent').innerHTML = marked(data)});
}