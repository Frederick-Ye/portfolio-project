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

  navLinks.forEach((a) => {
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  });
});

// popup window 1
const popUp1 = document.querySelector('.popupWindow1');
const popupBtn1 = document.querySelector('#seeproject1');
const closePopupBtn1 = document.querySelector('.a1');

function openPopup1() {
  popUp1.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup1() {
  popUp1.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

popupBtn1.addEventListener('click', openPopup1);
closePopupBtn1.addEventListener('click', closePopup1);

// pop.up window 2
const popUp2 = document.querySelector('.popupWindow2');
const popupBtn2 = document.querySelector('#seeproject2');
const closePopupBtn2 = document.querySelector('.a2');

function openPopup2() {
  popUp2.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup2() {
  popUp2.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

popupBtn2.addEventListener('click', openPopup2);
closePopupBtn2.addEventListener('click', closePopup2);

// popup window 3
const popUp3 = document.querySelector('.popupWindow3');
const popupBtn3 = document.querySelector('#seeproject3');
const closePopupBtn3 = document.querySelector('.a3');

function openPopup3() {
  popUp3.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup3() {
  popUp3.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

popupBtn3.addEventListener('click', openPopup3);
closePopupBtn3.addEventListener('click', closePopup3);

// popup window 4
const popUp4 = document.querySelector('.popupWindow4');
const popupBtn4 = document.querySelector('#seeproject4');
const closePopupBtn4 = document.querySelector('.a4');

function openPopup4() {
  popUp4.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup4() {
  popUp4.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

popupBtn4.addEventListener('click', openPopup4);
closePopupBtn4.addEventListener('click', closePopup4);

function validateForm() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim().toLowerCase();
  if (emailValue === emailInput.value.trim()) {
    return true;
  } {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = 'Please enter a lowercase email address!!!';
    return false;
  }
}

console.log('validateForm');

function saveToLocalStorage(data) {
  localStorage.setItem('formData', JSON.stringify(data));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('formData');
  return savedData ? JSON.parse(savedData) : {};
}

document.addEventListener('DOMContentLoaded', () => {
  const formData = loadFromLocalStorage();

  document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
      formData[input.name] = input.value;
      saveToLocalStorage(formData);
    });

    if (formData[input.name]) {
      input.value = formData[input.name];
    }
  });
});