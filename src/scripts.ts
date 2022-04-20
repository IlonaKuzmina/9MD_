///  NAV BAR ///

const navListContainer = document.querySelector<HTMLDivElement>('.js-nav-list');

navListContainer.innerHTML = '<a class="nav__item" href="#tour">Home</a> <a class="nav__item" href="#globally">Events</a> <a class="nav__item" href="#team">About</a> <a class="nav__item" href="#choose">Blog</a> <a class="nav__item" href="#news">Contact</a>';

/// TOUR PHOTO SLIDER ///

let slideCurrrentSlideIndex = 0;
const btnRight = document.querySelector<HTMLButtonElement>('.js-tour-arrow-right');
const btnLeft = document.querySelector<HTMLButtonElement>('.js-tour-arrow-left');
const slideElements = document.querySelectorAll('.js-slide');

const slideCount = slideElements.length - 1;

const toggleHiddenClasses = () => {
  slideElements.forEach((slideElement, index) => {
    if (slideCurrrentSlideIndex === index) {
      slideElement.classList.remove('hidden');
    } else {
      slideElement.classList.add('hidden');
    }
  });
};

btnRight.addEventListener('click', () => {
  const isLastSlide = slideCount === slideCurrrentSlideIndex;
  slideCurrrentSlideIndex = !isLastSlide ? slideCurrrentSlideIndex + 1 : 0;
  toggleHiddenClasses();
});

btnLeft.addEventListener('click', () => {
  const isFirstSlide = slideCurrrentSlideIndex === 0;
  slideCurrrentSlideIndex = isFirstSlide ? slideCount : slideCurrrentSlideIndex - 1;
  toggleHiddenClasses();
});

/// TOAST OPEN & CLOSE ///

const toast = document.querySelector<HTMLDivElement>('.js-toast');
const openToast = document.querySelector<HTMLButtonElement>('.js-open-toast');
const closeToast = document.querySelector('.js-close-toast');

openToast.addEventListener('click', () => {
  toast.style.visibility = 'visible';
});

closeToast.addEventListener('click', () => {
  toast.style.visibility = 'hidden';
});

/// CUSTOMER FORM ///

const customerBtn = document.querySelector<HTMLButtonElement>('.js-customer-btn');
const customerForm = document.querySelector('.js-customer-form');
const sendForm = document.querySelector('.js-thought__btn');

customerBtn.addEventListener('click', () => {
  customerForm.classList.remove('hidden');
});

sendForm.addEventListener('click', () => {
  customerForm.classList.add('hidden');
});

///  FOOTER CHANGE BACKGROUND COLOR ///

const footerInput = document.querySelector<HTMLInputElement>('.js-input-text');
const footerContainer = document.querySelector<HTMLDivElement>('.colored--three');

const getNewColor = () => {
  const colorsType = [
    '#8B0000',
    '#4B0082',
    '#808000',
    '#f4a460',
    '#4682B4',
  ];
  return colorsType[Math.floor(Math.random() * colorsType.length)];
};

const setNewColor = () => {
  const currentColor = footerContainer.style.backgroundColor;
  let randomColor = getNewColor();

  while (currentColor === randomColor) {
    randomColor = getNewColor();
  }
  footerContainer.style.backgroundColor = randomColor;
  footerInput.style.backgroundColor = footerContainer.style.backgroundColor;
};

footerInput.addEventListener('keypress', () => {
  setNewColor();
});

const footerButton = document.querySelector<HTMLButtonElement>('.js-button-text');
const footerInputEmail = document.querySelector<HTMLInputElement>('.js-input-text');
const emailUlElement = document.querySelector('.js-email-list');

footerButton.addEventListener('click', () => {
  const inputValue = footerInputEmail.value;
  const newLiElement = document.createElement('li');
  newLiElement.innerHTML = inputValue;

  emailUlElement.appendChild(newLiElement);
});
