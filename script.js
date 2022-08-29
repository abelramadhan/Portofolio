let show = false;
let nav = document.getElementById('nav');

function toggle() {
    console.log("tes");
    show = !show;
    if (!show) {
        nav.style = "height 0%; opacity: 0%";
    } else {
        nav.style = "height fit-content; opacity: 100%";
    }
}

window.addEventListener('resize', function() {
    if (this.window.innerWidth >= 1000) {
        nav.style = "display: block";
    }
});