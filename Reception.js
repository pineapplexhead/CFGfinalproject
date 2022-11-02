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

// Reception Pop-up boxes

var introBox = document.getElementById("Intro");

introBox.addEventListener('click',
   function(event){
    event.target.style.opacity="0"
   }
)

var Holly = document.getElementById("Holly");
var HollyBox = document.getElementById("HollyBox");

Holly.addEventListener('click',
   function(){
    HollyBox.style.opacity="1"
   }
)

HollyBox.addEventListener('click',
   function(){
    HollyBox.style.opacity="0"
   }
)

var Phone = document.getElementById("phone");
var phoneBox = document.getElementById("phoneBox");
var HazelTexts = document.getElementById("textstoHazel");
var MarcTexts = document.getElementById("textstoMarc");

Phone.addEventListener('click',
   function(){
    phoneBox.style.opacity="1"
   }
)

phoneBox.addEventListener('click',
   function(){
    HazelTexts.style.opacity="1"
    MarcTexts.style.opacity="1"
    phoneBox.style.opacity="0"
   }
)

HazelTexts.addEventListener('click',
   function(){
    HazelTexts.style.opacity="0"
   }
)

MarcTexts.addEventListener('click',
   function(){
    MarcTexts.style.opacity="0"
   }
)