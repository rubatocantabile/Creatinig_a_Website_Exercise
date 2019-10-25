const btn = document.getElementsByClassName('btn')[0];
const nav = document.getElementsByClassName('nav')[0];
const dim = document.getElementsByClassName('dim')[0];
const right = document.getElementsByClassName('right')[0];

btn.addEventListener('click', () => {
  right.classList.toggle('active');
});