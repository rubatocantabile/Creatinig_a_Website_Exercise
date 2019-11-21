// 변수 선언 var, let, const
// es5까지는 var, es6부터는 let/const이다
//getComputerStyle - camelcase
//get_computer_style - snakecase
//변수명을 선어할때는 camelcase를 하는경우가 대부분이다

const elem=document.getElementById("elem");
const btnOn=document.getElementsByClassName("on")[0];
const btnOff=document.getElementsByClassName("off")[0];
const btnToggle=document.getElementsByClassName("toggle")[0];


//on
btnOn.addEventListener('click', function() {
    elem.classList.add('active');
});

//off
btnOff.addEventListener('click', function() {
    elem.classList.remove('active');
});

//toggle
btnToggle.addEventListener('click', function() {
    elem.classList.toggle('active');

    if (elem.classList.contains('active')) {
        elem.style.cssText = "color:red";
    } else if (!elem.classList.contains('active')) {
        elem.style.cssText = "color:blue";
    }
});

const b = () => {

}