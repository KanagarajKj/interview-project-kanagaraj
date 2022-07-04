'use strict';
// Navbar 
// First Menu

const firstMenuBtn = document.getElementById('first_menu_btn');
const servicesChilds = document.getElementById('services_childs');

const servicesFirstPlusBtn = document.getElementById('service_childs_one_plus_btn');
const servicesTwoPlusBtn = document.getElementById('service_childs_two_plus_btn');
const servicesThreePlusBtn = document.getElementById('service_childs_three_plus_btn');


const serviceChildOne = document.getElementById('service_childs_one');
const serviceChildTwo = document.getElementById('service_childs_two');
const serviceChildThree = document.getElementById('service_childs_three');

firstMenuBtn.addEventListener('click',()=>{
  servicesChilds.classList.toggle("add")
})

servicesFirstPlusBtn.addEventListener('click',()=>{
  serviceChildOne.classList.toggle('adds') 
})

servicesTwoPlusBtn.addEventListener('click', () => {
  serviceChildTwo.classList.toggle('addmenu');
});

servicesThreePlusBtn.addEventListener('click', () => {
  serviceChildThree.classList.toggle('added');
});


// Second Menu

const secondMenuBtn = document.getElementById('second_menu_btn');
const solutionsChild = document.getElementById('solutions_childs');


const solutionsFirstBtn = document.getElementById('solutions_child_one_btn');
const solutionsSecondBtn = document.getElementById('solutions_child_two_btn');
const solutionsThirdBtn = document.getElementById('solutions_child_three_btn');


const solutionChildOne = document.getElementById('solutions_child_one');
const solutionChildTwo = document.getElementById('solutions_child_two');
const solutionChildThree = document.getElementById('solutions_child_three');

secondMenuBtn.addEventListener('click', () => {
  solutionsChild.classList.toggle('active');
});

solutionsFirstBtn.addEventListener('click', () => {
  solutionChildOne.classList.toggle('actived');
});

solutionsSecondBtn.addEventListener('click', () => {
  solutionChildTwo.classList.toggle('actives');
});

solutionsThirdBtn.addEventListener('click', () => {
  solutionChildThree.classList.toggle('activemenu');
});


// Third Menu
const weareMenuBtn = document.getElementById('weare_menu_btn');
const weAre = document.getElementById('weare_childs');

weareMenuBtn.addEventListener('click', () => {
  weAre.classList.toggle('adding');
});

// Forth Menu
const resourceMenuBtn = document.getElementById('resources_menu_btn');
const resource = document.getElementById('resources_childs');

resourceMenuBtn.addEventListener('click', () => {
  resource.classList.toggle('adden');
});


// Navbar Open

const navOpen = document.getElementById('navbar')
const menuIcon = document.getElementById('menu_icon')

menuIcon.addEventListener('click', () => {
  navOpen.classList.toggle('menuopen');
});



// Image Slider
let counter = 1;
setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 2000);