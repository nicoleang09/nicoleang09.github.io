var bodyRect = document.body.getBoundingClientRect(),
    homeOffset =
        document.getElementById("home-top").getBoundingClientRect().top -
        bodyRect.top;
// projectOffset =
//     document.getElementById("project-top").getBoundingClientRect().top -
//     bodyRect.top;
// experiencesOffset =
//     document.getElementById("experiences-top").getBoundingClientRect().top -
//     bodyRect.top;
// contactOffset =
//     document.getElementById("contact-top").getBoundingClientRect().top -
//     bodyRect.top;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
        // I am using 'display' instead of 'top':
        document.getElementById("nav").style.display = "block";
    } else {
        document.getElementById("nav").style.display = "none";
    }
};

var scrollDownAnim = bodymovin.loadAnimation({
    container: document.getElementById("scroll-down-anim"),
    path: "https://assets5.lottiefiles.com/packages/lf20_w5yx9nrk.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
});

scrollDownAnim.play();
