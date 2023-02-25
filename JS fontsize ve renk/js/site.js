var btn1 = document.querySelector("#btn1");

btn1.onclick = function() {
    txt1.className = "text-center m-5 text-success"

}
btn2.onclick = function() {
    txt1.className = "text-center m-5 text-secondary"

}
btn3.onclick = function() {
    txt1.className = "text-center m-5 text-info"

}
btn4.onclick = function() {
    txt1.className = "text-center m-5 text-danger"

}
btn5.onclick = function() {
    txt1.className = "text-center m-5 text-primary"

}
btn6.onclick = function() {
    txt1.className = "text-center m-5 text-light"

}
btn7.onclick = function() {
    txt1.className = "text-center m-5 text-dark"

}
btn8.onclick = function() {
    txt1.className = "text-center m-5 text-warning"

}



function changeFontSize() {
    var txt1 = document.getElementById("txt1");
    var currentSize = parseFloat(window.getComputedStyle(txt1).fontSize);
    txt1.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    var txt1 = document.getElementById("txt1");
    var currentSize = parseFloat(window.getComputedStyle(txt1).fontSize);
    txt1.style.fontSize = (currentSize - 2) + 'px';
}