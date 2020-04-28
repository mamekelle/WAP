/*jshint esversion: 6 */

const a = [1, 3, 5, 3, 3];
const b = a.map(elem => elem * 10);

console.log("The map value equals: " + b);
console.assert(b[0] === 10, "is not correct multiply");

const c = a.filter(elem => elem === 3);
console.log("The filter value equals: " + c);
console.assert(c[0] === 3, "is not correct filter");

const d = a.reduce((accumulator, elem) => accumulator * elem);
console.log("The reduce value equals: " + d);
console.assert(d === 135, "is not correct reduce");

function delayMsg() {
    setInterval(helloWorld, 500);
    document.getElementById("textArea").innerHTML = "Wait for it...";
}
window.onload = function(){
 document.getElementById("decorationButton").onclick=delayMsg;
 document.getElementById("checkBox").onchange=textAreaBold;
};

function helloWorld() {
    const textArea = document.getElementById("textArea");
    if (textArea.style.fontSize === "") {
        textArea.style.fontSize = "12pt";
    }
    textArea.style.fontSize = parseFloat(textArea.style.fontSize) + 2 + "pt";
}

function textAreaBold() {
    this.className='textArea';
}


