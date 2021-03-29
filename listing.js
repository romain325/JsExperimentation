window.onload = () => {
    readTextFile("content.json", (data) => {
        const arr = JSON.parse(data)
        const list = document.getElementById("listing")
        arr.forEach((e) => {
            const newNode = document.createElement("li");
            const link = document.createElement("a");
            link.href = `/exercices?ex=${e}`;
            link.innerText = e;
            newNode.appendChild(link);
            list.appendChild(newNode);
        })
    })
}