const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  console.log("clicked!");
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copy!!!!!!!!!!");
}
function handleWindowOffLine() {
  alert("SOS no wifi");
}
function handleWindowOnLine() {
  alert("connection good");
}
//h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);
