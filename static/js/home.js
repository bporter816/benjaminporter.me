var imgsIndex = 0;
var taglineIndex = 0;
var emojiIndex = 0;

setInterval(() => {
    var imgsElem = document.getElementById("profile");
    imgsIndex = (imgsIndex + 1) % imgs.length;
    imgsElem.src = `/img/profile/${imgs[imgsIndex]}`;

    var taglineElem = document.getElementById("tagline");
    taglineIndex = (taglineIndex + 1) % taglines.length;
    taglineElem.innerHTML = taglines[taglineIndex];

    var emojiElem = document.getElementById("emoji");
    emojiIndex = (emojiIndex + 1) % emoji.length;
    emojiElem.innerHTML = emoji[emojiIndex];
}, 5000);
