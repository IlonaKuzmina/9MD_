///  FOOTER INPUT EMAIL ///
/* const footerButton = document.querySelector<HTMLButtonElement>('.js-footer-button');
const footerInputEmail = document.querySelector<HTMLInputElement>('.js-input-text');

const validation = () => {

} 
document.querySelector('.js-footer-button').onclick = function
() {
  if (document.querySelector('.js-input-text').value.length == 0) {
    alert('Pleas enter the e-mail');
  } else {
    document.querySelector('.emails').innerHTML
    += `
    <div class="email"> 
    <span class="email-name"> 
    ${document.querySelector('.js-input-text').value}
    </span>
    </div>
    <button class="delete"> D </button>
    `;
  }
};

const footerButton = document.querySelector<HTMLButtonElement>('.js-footer-button');
const footerInputEmail = document.querySelector<HTMLInputElement>('.js-input-text');
const newEnteredEmail = document.querySelector<HTMLDivElement('.js-emails');

const validation = () => {
  if (footerInputEmail.value.length == 0) {
    alert('Please enter the e-mail');
  } else {
    newEnteredEmail.innerHTML += `
  <div class="email"> 
  <span class="email-name"> 
  ${footerInputEmail.value}
  </span>
  </div>
  <button class="delete"> D </button>
`;
  }
  footerButton.addEventListener('click', () => {
    validation();
};

let x;
let toast = document.querySelector('.toast');
function showToast(){
clearTimeout(x);
toast.style.transform = "translateX(0)";
x = setTimeout(() => {
  toast.style.transform = "translateX(490px)";
}, 4000);
toast.addEventListener('click', () => {
  showToast();
}
*/

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
