const ptag = document.querySelector(".test-js");

const gomb = document.getElementById("gomb");

console.log(gomb)
   

function handlerClick() {
    fetch('./beef.txt').then(response => response.text())
    .then(text => lines = text.split('\n'))
    .then(lines => ptag.innerHTML = lines[Math.floor(Math.random() * lines.length)]);
}
handlerClick()

gomb.addEventListener("click", handlerClick);