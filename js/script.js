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
    asideSectionTogglerBtn();
  });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.toggle("open");
  }
}

// Contact Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    const responseMessage = document.getElementById("response-message");
    responseMessage.style.display = "block";
    responseMessage.textContent = "Enviando mensagem...";

    const formData = {
      user_name: document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_5rvfx7n", "template_mc15zpk", formData)
      .then((response) => {
        console.log("Mensagem enviada com sucesso:", response);
        responseMessage.textContent = "Mensagem enviada com sucesso!";
        responseMessage.style.color = "green";
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        responseMessage.textContent =
          "Erro ao enviar mensagem. Tente novamente.";
        responseMessage.style.color = "red";
      });
  });
