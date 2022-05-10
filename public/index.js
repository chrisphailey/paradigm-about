function turnOnLight(event) {
  event.preventDefault();
  document.getElementById("section-9").style.backgroundImage =
    "url(./assets/images/glow-light-1.jpg";
}
function turnOffLight(event) {
  event.preventDefault();
  document.getElementById("section-9").style.backgroundImage =
    "url(./assets/images/light-bulb.jpg";
}
document
  .getElementById("section-9-btn")
  .addEventListener("mouseover", turnOnLight);
document
  .getElementById("section-9-btn")
  .addEventListener("mouseleave", turnOffLight);
