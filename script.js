const mobileMenu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector("#openMenuBtn");
const closeBtn = document.querySelector("#closeMenuBtn");
const portfolioBtn = document.getElementById("menu1");
console.log(portfolioBtn)
const aboutBtn = document.getElementById("menu2");
const contactBtn = document.getElementById("menu3");

openBtn.addEventListener("click", openFun)
closeBtn.addEventListener("click", closeFun)
portfolioBtn.addEventListener("click", closeFun)
aboutBtn.addEventListener("click", closeFun)
contactBtn.addEventListener("click", closeFun)

function openFun(){
  mobileMenu.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeFun(){
  mobileMenu.classList.add("hidden")
  document.body.style.overflow = "auto"
}

function scrollToSection(portfolioSection){
  var section = document.getElementById(portfolioSection);
  if (section) {
    section.scrollIntoView({ behavior: "smooth"})
  }
}

function scrollToSection(aboutSection){
  var section = document.getElementById(aboutSection);
  if (section) {
    section.scrollIntoView({ behavior: "smooth"})
  }
}

function scrollToSection(contactSection){
  var section = document.getElementById(contactSection);
  if (section) {
    section.scrollIntoView({ behavior: "smooth"})
  }
}