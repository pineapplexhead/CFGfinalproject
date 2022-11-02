// Nav bar code
document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))


var Dusty = document.getElementById("s-dusty");
var Hazel = document.getElementById("s-hazel");
var Holly = document.getElementById("s-holly");
var Lewis = document.getElementById("s-lewis");
var Marc = document.getElementById("s-marc");
var Walter = document.getElementById("s-walter");
var Will = document.getElementById("s-will");

var Knife = document.getElementById("s-knife");
var Rifles = document.getElementById("s-rifles");
var Rope = document.getElementById("s-rope");
var Whiskey = document.getElementById("s-whiskey");

// Correct murderer button
Hazel.addEventListener('click', function onClick() {
    Hazel.style.backgroundColor = 'green';
});

// Correct weapon button
Whiskey.addEventListener('click', function onClick() {
    Whiskey.style.backgroundColor = 'green';
});

// Incorrect murderer buttons
Dusty.addEventListener('click', function onClick() {
    Dusty.style.backgroundColor = 'red';
});

Holly.addEventListener('click', function onClick() {
    Holly.style.backgroundColor = 'red';
});

Lewis.addEventListener('click', function onClick() {
    Lewis.style.backgroundColor = 'red';
});

Marc.addEventListener('click', function onClick() {
    Marc.style.backgroundColor = 'red';
});

Walter.addEventListener('click', function onClick() {
    Walter.style.backgroundColor = 'red';
});

Will.addEventListener('click', function onClick() {
    Will.style.backgroundColor = 'red';
});

// Incorrect weapon buttons
Knife.addEventListener('click', function onClick() {
    Knife.style.backgroundColor = 'red';
});

Rifles.addEventListener('click', function onClick() {
    Rifles.style.backgroundColor = 'red';
});

Rope.addEventListener('click', function onClick() {
    Rope.style.backgroundColor = 'red';
});

// Final reveal pop up box

var Solution_Button = document.getElementById("solution-button");
var Solution = document.getElementById("correct-solution");

Solution_Button.addEventListener('click',
   function(){
    Solution.style.opacity="1"
   }
)

Solution.addEventListener('click',
   function(){
    Solution.style.opacity="0"
   }
)

});

