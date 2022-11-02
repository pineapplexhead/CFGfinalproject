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


// Garden Pop-ups

var Marc = document.getElementById("Marc");
var MarcBox = document.getElementById("MarcBox");

Marc.addEventListener('click',
   function(){
    MarcBox.style.opacity="1"
   }
)

MarcBox.addEventListener('click',
   function(){
    MarcBox.style.opacity="0"
   }
)

var rope = document.getElementById("rope");
var ropeBox = document.getElementById("ropeBox");

rope.addEventListener('click',
   function(){
    ropeBox.style.opacity="1"
   }
)

ropeBox.addEventListener('click',
   function(){
    ropeBox.style.opacity="0"
   }
)