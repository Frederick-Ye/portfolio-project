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

const popUp = document.querySelector(".popupWindow")

const projects = [
    {
        title: "Tonic",
        name: "CANOPY",
        image: "./snapshoots/work portfolio.png",
    },
    {
        title: "Multi-Post Stories",
        name: "FACEBOOK",
        image: "./snapshoots/work portfolio 2.png",
    },
    {
        title: "Facebook 360",
        name: "FACEBOOK",
        image: "./snapshoots/work portfolio 3.png",
    },
    {
        title: "Uber Navigation",
        name: "Uber",
        image: "./snapshoots/work portfolio 4.png",
    },
]

function getProjectHTML(project) {
    const html = `<div class="popupWindowContainer">
                <div class="popupTop">
                    <h1 class="title">${project.title}</h1>
                    <a class="a" id="closeMenuBtn1" href="#" onclick="return false;"><img src="./images/Icon - Cancel.svg"
                            alt=""></a>
                </div>

                <div class="details">
                    <p class="name">${project.name}</p>
                    <img src="./snapshoots/Counter.svg" alt="counter icon">
                    <p class="position">Back End Dev</p>
                    <img src="./snapshoots/Counter.svg" alt="counter icon">
                    <p class="year">2015</p>
                </div>

                <div class="popupImage1">
                    <img src="${project.image}" alt="">
                </div>

                <div class="popupfooter">
                    <div class="about-job">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.

                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and
                            scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
                        </p>
                    </div>
                    <div class="right-box">
                        <div class="subject-pictures">
                            <a href="#" onclick="return false;" class="subjects">HTML</a>
                            <a href="#" onclick="return false;" class="subjects">CSS</a>
                            <a href="#" onclick="return false;" class="subjects">JavaScript</a>
                        </div>
                        <div class="divider">
                            <img src="./images/Vector 4.png" alt="">
                        </div>
                        <div class="buttons">
                            <button type="button" class="button liveBtn">
                                See live <img src="./icons/Icon - Export.svg" alt="">
                            </button>
                            <button type="button" class="button sourceBtn">
                                See source <img src="./icons/Frame.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
          </div>`

    return html
}

function openPopup(project) {
    popUp.classList.remove("hidden")
    document.body.style.overflow = "hidden"

    popUp.innerHTML = getProjectHTML(project)
    const closePopupBtn = document.querySelector(".a")
    closePopupBtn.addEventListener("click", closePopup)
}

function closePopup() {
    popUp.classList.add("hidden")
    document.body.style.overflow = "auto"
}

const popUpBtns = document.querySelectorAll("#seeproject")

popUpBtns.forEach((popupBtn, index) => {
    popupBtn.addEventListener("click", () => openPopup(projects[index]))
})
// form
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

document.querySelector('form').addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

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

const textarea = document.querySelector('textarea');
const formData = loadFromLocalStorage();
textarea.addEventListener('input', () => {
  formData[textarea.name] = textarea.value;
  saveToLocalStorage(formData);
});

if (formData[textarea.name]) {
  textarea.value = formData[textarea.name];
};