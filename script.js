function hamburgerMenu() {
    let hamburger = document.getElementById("nav-container");
    if (hamburger.className === "container") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "container";
    }
}