var isModalOpen = false;
var bodyRect = document.body.getBoundingClientRect();
var homeOffset =
    document.getElementById("home-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
projectOffset =
    document.getElementById("projects-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
experiencesOffset =
    document.getElementById("experiences-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
contactOffset =
    document.getElementById("contact-top").getBoundingClientRect().top -
    bodyRect.top -
    150;

window.onload = window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var homeLink = document.getElementById("nav-home");
    var projectsLink = document.getElementById("nav-projects");
    var experiencesLink = document.getElementById("nav-experiences");
    var contactLink = document.getElementById("nav-contact");

    if (currentScrollPos > window.innerHeight - 120 || isModalOpen) {
        $("#nav").fadeIn();
        $("#top-arrow-btn").fadeIn();
    } else {
        $("#nav").fadeOut();
        $("#top-arrow-btn").fadeOut();
    }

    // set selected in nav bar
    if (isModalOpen) return;

    if (currentScrollPos >= homeOffset && currentScrollPos < projectOffset) {
        homeLink.classList.add("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");
    } else if (
        currentScrollPos >= projectOffset &&
        currentScrollPos < experiencesOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.add("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");
    } else if (
        currentScrollPos >= experiencesOffset &&
        currentScrollPos < contactOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.add("selected");
        contactLink.classList.remove("selected");
    } else if (currentScrollPos >= contactOffset) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.add("selected");
    }
};

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var homeLink = document.getElementById("nav-home");
    var projectsLink = document.getElementById("nav-projects");
    var experiencesLink = document.getElementById("nav-experiences");
    var contactLink = document.getElementById("nav-contact");

    if (currentScrollPos > window.innerHeight - 120 || isModalOpen) {
        $("#nav").fadeIn();
        $("#top-arrow-btn").fadeIn();
    } else {
        $("#nav").fadeOut();
        $("#top-arrow-btn").fadeOut();
    }

    // set selected in nav bar
    if (isModalOpen) return;

    if (currentScrollPos >= homeOffset && currentScrollPos < projectOffset) {
        homeLink.classList.add("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");
    } else if (
        currentScrollPos >= projectOffset &&
        currentScrollPos < experiencesOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.add("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");
    } else if (
        currentScrollPos >= experiencesOffset &&
        currentScrollPos < contactOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.add("selected");
        contactLink.classList.remove("selected");
    } else if (currentScrollPos >= contactOffset) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.add("selected");
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

function scrollToSection(section) {
    console.log(section);

    const yOffset = -80;
    const element = document.getElementById(section);
    const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showModal(modalId) {
    $(modalId).foundation("open");
    isModalOpen = true;
}

(function ($, window, undefined) {
    "use strict";

    $("[data-reveal]").on("closed.zf.reveal", function () {
        var modal = $(this);
        isModalOpen = false;
        console.log("closed modal");
    });

    $(document).foundation();
})(jQuery, this);
