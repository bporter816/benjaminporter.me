var imgsIndex = 0;

setInterval(() => {
    var elem = document.getElementById("profile");
    imgsIndex = (imgsIndex + 1) % imgs.length;
    elem.src = `/img/profile/${imgsIndex}.jpg`;
}, 5000);
