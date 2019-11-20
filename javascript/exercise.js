const elem = document.getElementById('elem');
const btnOn = document.getElementsByClassName('on')[0];
const btnOff = document.getElementsByClassName('off')[0];
const btnToggle = document.getElementsByClassName('toggle')[0];

btnOn.addEventListener('click', function () {
  elem.classList.add('active');
});

btnOff.addEventListener('click', function () {
  elem.classList.remove('active');
});

btnToggle.addEventListener('click', function () {
  elem.classList.toggle('active');
  
  if (elem.classList.contains('active')) {
    elem.style.cssText = 'color: red';
  } else if (!elem.classList.contains('active')) {
    elem.style.cssText = 'color: blue';
  }
});




// =========================================================


a();
b();

function a(param) {
  console.log(param);
}

const b = (param) => {
  console.log(param);
}
