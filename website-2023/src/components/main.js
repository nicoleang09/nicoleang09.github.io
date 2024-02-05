import $ from "jquery";

var isModalOpen = false;
var bodyRect = document.body.getBoundingClientRect();
var homeOffset, projectOffset, experienceOffset, contactOffset;

var homeLink, projectsLink, experienceLink, contactLink;
var homeLinkMobile, projectsLinkMobile, experienceLinkMobile, contactLinkMobile;

function initLinks() {
  console.log("initialising links...");

  homeLink = document.getElementById("nav-home");
  projectsLink = document.getElementById("nav-projects");
  experienceLink = document.getElementById("nav-experience");
  contactLink = document.getElementById("nav-contact");

  homeLinkMobile = document.getElementById("nav-home-mobile");
  projectsLinkMobile = document.getElementById("nav-projects-mobile");
  experienceLinkMobile = document.getElementById("nav-experience-mobile");
  contactLinkMobile = document.getElementById("nav-contact-mobile");

  // console.log(
  //   `links are null? ${homeLink}, ${projectsLink}, ${experienceLink}, ${contactLink}`
  // );
  // console.log(
  //   `mobile links are null? ${homeLinkMobile}, ${projectsLinkMobile}, ${experienceLinkMobile}, ${contactLinkMobile}`
  // );
}

function initOffsets() {
  homeOffset =
    document.getElementById("home-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
  projectOffset =
    document.getElementById("projects-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
  experienceOffset =
    document.getElementById("experience-top").getBoundingClientRect().top -
    bodyRect.top -
    150;
  contactOffset =
    document.getElementById("contact-top").getBoundingClientRect().top -
    bodyRect.top -
    200;
}

window.onload = window.onscroll = function () {
  // var homeSection = document.getElementById("home-top");
  // var windowHeight = $(window).height();
  // homeSection.style.height = windowHeight + "px";

  var currentScrollPos = window.pageYOffset;

  // closeMenu();
  setVisibility(currentScrollPos);
  setSelectedPage(currentScrollPos);
};

function scrollToSection(section) {
  const yOffset = -80;
  const element = document.getElementById(section);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setVisibility(currentScrollPos) {
  if (currentScrollPos > window.innerHeight - 120) {
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
  // console.log("current scroll position: " + currentScrollPos);

  if (currentScrollPos >= homeOffset && currentScrollPos < experienceOffset) {
    homeLink.classList.add("selected");
    projectsLink.classList.remove("selected");
    experienceLink.classList.remove("selected");
    contactLink.classList.remove("selected");

    // homeLinkMobile.classList.add("selected-mobile");
    // projectsLinkMobile.classList.remove("selected-mobile");
    // experienceLinkMobile.classList.remove("selected-mobile");
    // contactLinkMobile.classList.remove("selected-mobile");
  } else if (
    currentScrollPos >= experienceOffset &&
    currentScrollPos < projectOffset
  ) {
    homeLink.classList.remove("selected");
    projectsLink.classList.remove("selected");
    experienceLink.classList.add("selected");
    contactLink.classList.remove("selected");

    // homeLinkMobile.classList.remove("selected-mobile");
    // projectsLinkMobile.classList.remove("selected-mobile");
    // experienceLinkMobile.classList.add("selected-mobile");
    // contactLinkMobile.classList.remove("selected-mobile");
  } else if (
    currentScrollPos >= projectOffset &&
    currentScrollPos < contactOffset
  ) {
    homeLink.classList.remove("selected");
    projectsLink.classList.add("selected");
    experienceLink.classList.remove("selected");
    contactLink.classList.remove("selected");

    // homeLinkMobile.classList.remove("selected-mobile");
    // projectsLinkMobile.classList.add("selected-mobile");
    // experienceLinkMobile.classList.remove("selected-mobile");
    // contactLinkMobile.classList.remove("selected-mobile");
  } else if (currentScrollPos >= contactOffset) {
    homeLink.classList.remove("selected");
    projectsLink.classList.remove("selected");
    experienceLink.classList.remove("selected");
    contactLink.classList.add("selected");

    // homeLinkMobile.classList.remove("selected-mobile");
    // projectsLinkMobile.classList.remove("selected-mobile");
    // experienceLinkMobile.classList.remove("selected-mobile");
    // contactLinkMobile.classList.add("selected-mobile");
  }
}

export { initLinks, initOffsets, scrollToSection, scrollToTop };
