const mobileMenu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('#openMenuBtn');
const closeBtn = document.querySelector('#closeMenuBtn');
const portfolioBtn = document.getElementById('menu1');
const aboutBtn = document.getElementById('menu2');
const contactBtn = document.getElementById('menu3');

function openFun() {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFun() {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

openBtn.addEventListener('click', openFun);
closeBtn.addEventListener('click', closeFun);
portfolioBtn.addEventListener('click', closeFun);
aboutBtn.addEventListener('click', closeFun);
contactBtn.addEventListener('click', closeFun);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links-container a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const yOffset = window.scrollY + 50;
    if (yOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  });
});