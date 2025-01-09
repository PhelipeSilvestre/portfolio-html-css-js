// Typing animation
var typed = new Typed(".typing", {
  strings: [
    "Desenvolvedor Fullstack",
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Aside Navbar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Contact Form
