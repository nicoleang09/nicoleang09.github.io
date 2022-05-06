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

var homeLink = document.getElementById("nav-home");
var projectsLink = document.getElementById("nav-projects");
var experiencesLink = document.getElementById("nav-experiences");
var contactLink = document.getElementById("nav-contact");

var homeLinkMobile = document.getElementById("nav-home-mobile");
var projectsLinkMobile = document.getElementById("nav-projects-mobile");
var experiencesLinkMobile = document.getElementById("nav-experiences-mobile");
var contactLinkMobile = document.getElementById("nav-contact-mobile");

window.onload = window.onscroll = function () {
    // var homeSection = document.getElementById("home-top");
    // var windowHeight = $(window).height();
    // homeSection.style.height = windowHeight + "px";

    var currentScrollPos = window.pageYOffset;

    closeMenu();
    setVisibility(currentScrollPos);
    setSelectedPage(currentScrollPos);
};

var scrollDownAnim = bodymovin.loadAnimation({
    container: document.getElementById("scroll-down-anim"),
    path: "https://assets5.lottiefiles.com/packages/lf20_w5yx9nrk.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
});

scrollDownAnim.play();

function setVisibility(currentScrollPos) {
    if (currentScrollPos > window.innerHeight - 120 || isModalOpen) {
        $("#nav").fadeIn();
        $("#nav-bottom").fadeIn();
        $("#top-arrow-btn").fadeIn();
    } else {
        $("#nav").fadeOut();
        $("#nav-bottom").fadeOut();
        $("#top-arrow-btn").fadeOut();
    }
}

function setSelectedPage(currentScrollPos) {
    if (isModalOpen) return;

    if (currentScrollPos >= homeOffset && currentScrollPos < experiencesOffset) {
        homeLink.classList.add("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");

        homeLinkMobile.classList.add("selected-mobile");
        projectsLinkMobile.classList.remove("selected-mobile");
        experiencesLinkMobile.classList.remove("selected-mobile");
        contactLinkMobile.classList.remove("selected-mobile");
    } else if (
        currentScrollPos >= experiencesOffset &&
        currentScrollPos < projectOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.add("selected");
        contactLink.classList.remove("selected");

        homeLinkMobile.classList.remove("selected-mobile");
        projectsLinkMobile.classList.remove("selected-mobile");
        experiencesLinkMobile.classList.add("selected-mobile");
        contactLinkMobile.classList.remove("selected-mobile");
    } else if (
        currentScrollPos >= projectOffset &&
        currentScrollPos < contactOffset
    ) {
        homeLink.classList.remove("selected");
        projectsLink.classList.add("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.remove("selected");

        homeLinkMobile.classList.remove("selected-mobile");
        projectsLinkMobile.classList.add("selected-mobile");
        experiencesLinkMobile.classList.remove("selected-mobile");
        contactLinkMobile.classList.remove("selected-mobile");
    } else if (currentScrollPos >= contactOffset) {
        homeLink.classList.remove("selected");
        projectsLink.classList.remove("selected");
        experiencesLink.classList.remove("selected");
        contactLink.classList.add("selected");

        homeLinkMobile.classList.remove("selected-mobile");
        projectsLinkMobile.classList.remove("selected-mobile");
        experiencesLinkMobile.classList.remove("selected-mobile");
        contactLinkMobile.classList.add("selected-mobile");
    }
}

function scrollToSection(section) {
    console.log(section);

    const yOffset = -80;
    const element = document.getElementById(section);
    const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
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

function showTitle() {
    var homeLink = document.getElementById("attributions-title");
    // homeLink.style.visibility = "visible";
    homeLink.style.opacity = "100%";
}

function hideTitle() {
    var homeLink = document.getElementById("attributions-title");
    // homeLink.style.visibility = "hidden";
    homeLink.style.opacity = "0%";
}

function openMenu() {
    $("#menu-mobile").fadeIn();
    // $("#nav-bottom").fadeOut();
}

function closeMenu() {
    $("#menu-mobile").fadeOut();
    // $("#nav-bottom").fadeIn();
}

// currently not used
function submitForm() {
    var name = document.getElementById("form-name").value;
    var email = document.getElementById("form-email").value;
    var message = document.getElementById("form-message").value;

    if (name === "" || email === "" || message === "") return;

    $.ajax({
        method: "POST",
        url: "https://formsubmit.co/ajax/e2d41fd1578165051b657e0b88151f3b",
        dataType: "json",
        accepts: "application/json",
        data: {
            name: name,
            email: email,
            message: message,
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err),
    });
}
