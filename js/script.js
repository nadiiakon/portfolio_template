
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-percent'),
    lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },0);
// }

// var a = { x: 1, y: 2};
// var b = a;
// b.x = 10;
// console.log(a.x);


// var c = {};
// var d = {};

// console.log(c ===d);

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         alert(i);
//     }, 100);
// }
