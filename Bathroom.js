// Navbar

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
 
    });

// Room navigation buttons

var allButtons= document.getElementsByClassName("Buttons");

for(var i = 0; i < allButtons.length; i++) {
allButtons[i].addEventListener('mouseover', 
    function (event) {
    event.target.style.backgroundColor = "green";
    }
)
}
for(var i = 0; i < allButtons.length; i++) {
allButtons[i].addEventListener('mouseout', 
    function(event){
        event.target.style.backgroundColor="black";
    }
)
}

// Clickable objects

var allObjects = document.getElementsByClassName("Objects");

for(var i = 0; i < allObjects.length; i++) {
 allObjects[i].addEventListener('mouseover', 
    function(event){
        event.target.style.opacity="0.8"
        event.target.style.filter="brightness(180%)"
    }
)
}

for(var i = 0; i < allObjects.length; i++) {
    allObjects[i].addEventListener('mouseout', 
    function(event){
        event.target.style.opacity="1"
        event.target.style.filter="brightness(100%)"
    }
   )
   }


// Bathroom Pop-ups

var Dusty = document.getElementById("Dusty");
var DustyBox = document.getElementById("DustyBox");

Dusty.addEventListener('click',
   function(){
    DustyBox.style.opacity="1"
   }
)

DustyBox.addEventListener('click',
   function(){
    DustyBox.style.opacity="0"
   }
)

var book = document.getElementById("book");
var bookBox = document.getElementById("bookBox");

book.addEventListener('click',
   function(){
    bookBox.style.opacity="1"
   }
)

var foreword = document.getElementById("foreword");

bookBox.addEventListener('click',
   function(){
    foreword.style.opacity="1"
    bookBox.style.opacity="0"
   }
)

foreword.addEventListener('click',
   function(){
    foreword.style.opacity="0"
   }
)