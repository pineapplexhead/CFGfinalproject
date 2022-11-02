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


// Bedroom Pop-ups

var Lewis = document.getElementById("Lewis");
var LewisBox = document.getElementById("LewisBox");

Lewis.addEventListener('click',
   function(){
    LewisBox.style.opacity="1"
   }
)

LewisBox.addEventListener('click',
   function(){
    LewisBox.style.opacity="0"
   }
)

var whiskey = document.getElementById("whiskey");
var whiskeyBox = document.getElementById("whiskeyBox");

whiskey.addEventListener('click',
   function(){
    whiskeyBox.style.opacity="1"
   }
)

whiskeyBox.addEventListener('click',
   function(){
    whiskeyBox.style.opacity="0"
   }
)