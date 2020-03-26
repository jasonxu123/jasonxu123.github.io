function topBarFade(topBar) {
    // don't fade for screens too small, e.g. mobile
    if (window.matchMedia("screen and (max-width: 48em)").matches) {
        return;
    }

    if (window.scrollY / topBar.clientHeight < 0.5) {
        topBar.style.opacity = 1;
    } else {
        topBar.style.opacity = 0.05;
    }
}

function topBarHover(topBar) {
    topBar.style.opacity = 1;
}

document.addEventListener("scroll", (evt) => {
    const topBar = document.getElementById("topBar");
    topBarFade(topBar);
}, {capture: false, passive: true});