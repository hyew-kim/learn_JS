const bodyColor = document.body.classList;
const originWidthLength = 1000;
let oldClass = "null";

function changeColor(color) {
  bodyColor.remove(oldClass);
  bodyColor.add(color);
  oldClass = color;
}

function selectByWidth() {
  const widthLength = window.innerWidth;

  if (widthLength <= originWidthLength * 0.5) {
    changeColor("blue");
  } else if (widthLength > originWidthLength * 0.9) {
    changeColor("yellow");
  } else {
    changeColor("purple");
  }
  console.log(oldClass);
}

window.addEventListener("resize", selectByWidth);
