
function back() {
    let menubox = document.getElementById("right-nav");

    if (menubox.style.right == "100%") {
        menubox.style.right = "0%";
    }
    else {
        menubox.style.right = "100%";
    }
    menubox.style.color = "red";
}