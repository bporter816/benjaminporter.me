// source: https://stackoverflow.com/questions/688196/how-to-use-a-link-to-call-javascript/688228#688228 and Garrett Gu
window.onload = function() {
    var link = document.getElementById("email");
    var info = document.getElementById("info-col");
    link.onclick = function() {
        var n = document.createElement("span");
        n.setAttribute("class", "tag is-link is-medium");
        n.innerHTML = atob("YnBvcnRlcjgxNiBbYXRdIHV0ZXhhcy5lZHUK");
        console.log(info.childNodes);
        info.appendChild(n);
        link.parentNode.removeChild(link);
        return false;
    }
}
