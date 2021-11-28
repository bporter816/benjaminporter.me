var imgsIndex = 0;
var taglineIndex = 0;

setInterval(() => {
    var imgsElem = document.getElementById("profile");
    imgsIndex = (imgsIndex + 1) % imgs.length;
    imgsElem.src = `/img/profile/${imgs[imgsIndex]}`;

    var taglineElem = document.getElementById("tagline");
    taglineIndex = (taglineIndex + 1) % taglines.length;
    taglineElem.innerHTML = taglines[taglineIndex];
}, 5000);
