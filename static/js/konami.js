var pattern = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
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
    document.getElementById("body").classList.toggle("upside-down");
}
