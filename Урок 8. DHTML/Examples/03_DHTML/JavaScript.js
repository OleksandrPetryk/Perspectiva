var div1;
var leftPos = 0;

window.onload = function () {
  div1 = document.getElementById("div1");
  setInterval(animate, 10);
}

function animate() {
  div1.style.left = leftPos + "px";
  leftPos++;
}