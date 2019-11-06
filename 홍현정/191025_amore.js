const btn = document.getElementsByClassName('btn')[0];
const nav = document.getElementsByClassNmae('nav')[0];
const dim = document.getElementsByClassNmae('dim')[0];
const right = document.getElementsByClassName('right')[0];

btn.addEventListener('click',()=>{
    right.classList.toggle('active');
});