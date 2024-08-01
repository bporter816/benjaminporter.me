const pattern = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var index = 0;
document.addEventListener("keydown", function onEvent(event) {
  if (event.key === pattern[index]) {
    index++;
    if (index === pattern.length) {
      index = 0;
      konami();
    }
  } else {
    index = 0;
  }
});

function konami() {
  const idx = Math.floor(Math.random() * 2);
  switch (idx) {
    case 0:
      document.getElementById("body").classList.toggle("upside-down");
      break;
    case 1:
      window.open("https://www.youtube.com/watch?v=ia8Q51ouA_s");
      break;
    default:
      alert("Oops");
  }
}
