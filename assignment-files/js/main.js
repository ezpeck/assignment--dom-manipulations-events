// GO!

// TASK 1 -- Show/Hide Nav
//   HINT: you may want to use the following methods:
//   domEl.classList.contains(), domEl.classList.add(),

var btn1 = document.querySelector('.btn-toggle-menu');
var nav = document.querySelector('.nav-menu');
btn1.addEventListener('click',function () {
    nav.classList.toggle('nav-menu-hidden');
});
// TASK 2 -- Select an Icon

var listIcons = document.querySelectorAll('.wish-list div');

listIcons.forEach(function (item) {
    item.addEventListener('click',function (e) {
        btn = e.currentTarget;
        btn.classList.toggle('selected');
        
    });
});

// TASK 3 -- Increase total number

var numbers = document.querySelectorAll('.point');
var total = document.querySelector('.total-points');
numbers.forEach(function (item) {
    item.addEventListener('click',function (e) {
        var resultado = parseInt(total.textContent);
        var element = parseInt(e.target.textContent);
        resultado += element; 
        total.textContent = resultado;
    });
});

// TASK 4 (Adventure Mode)-- Move Item List to List
var parentGood = document.querySelector('.good-standing-list');
var parentProbation = document.querySelector('.probation-list');
var listGood = document.querySelectorAll('.good-standing-list');
var listProbation = document.querySelectorAll('.probation-list');

listGood.forEach(function (item) {
    item.addEventListener('click',function (e) {
        parentGood.removeChild(e.target);
        parentProbation.appendChild(e.target);
    });
});

listProbation.forEach(function (item) {
    item.addEventListener('click', function (e) {
        parentProbation.removeChild(e.target);
        parentGood.appendChild(e.target);
    });
});

// TASK 5 (Adventure Mode) -- Change Text Background Color From Palette

var colors = document.querySelectorAll('.palette span');
var para = document.querySelector('.msg');

colors.forEach(function (item) {
    item.addEventListener('click', function (e) {
        para.className = "msg "+e.target.className;
    });
});
