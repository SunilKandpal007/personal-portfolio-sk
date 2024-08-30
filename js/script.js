// toggle icon navbar

// scroll sections
let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  //sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// activate .active class while clicking on nav-links or while scrolling
// const HeaderLink = Array.from(document.querySelectorAll("header a"));
const NavLinks = Array.from(document.querySelectorAll("nav a"));
const Sections = Array.from(document.querySelectorAll("section"));

window.addEventListener("scroll", function () {
  let currentSection = null;
  Sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
      currentSection = section;
    }
  });

  //   HeaderLink.forEach(headerlink=>{
  //     headerlink.classList.remove('active');
  //     if (link.getAttribute('href') === headerlink('href')) {
  //         link.classList.add('active');
  //       }
  //   });

  NavLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection.id}`) {
      link.classList.add("active");
    }
  });
});

const AnimateText = document.getElementById("typewriter-text");
console.log(AnimateText);
AnimateText.classList.add('animate');