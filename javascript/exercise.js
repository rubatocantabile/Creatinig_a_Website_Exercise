const elem = document.getElementById('elem');
const elem2 = document.getElementById('elem2');
const btnOn = document.querySelector('on');
const btnOff = document.querySelector('off');
const btnToggle = document.querySelector('toggle');

const li2 = document.querySelectorAll('#elem2 .li2');  // [<#elem2 .li2>, <#elem3 .li2>]
const li3 = document.getElementsByClassName('.li2');  // [<#elem .li2>, <#elem2 .li2>, <#elem3 .li2>]

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







// ==========================================================


const a = document.getElementById('elem');



//case1
const b = () => {
  console.log(this);
}

b(); // window

a.addEventListener('click', function () {
  b(); // window
});


//case2
const b = (that) => {
  console.log(that);
}

b(); // window

a.addEventListener('click', function () {
  b(this); // a
});