
var images = ["1.png", "2.png", "3.png","4.png","5.png"];
var currentImage = 0; 

function picRight() {
    currentImage += 1;
    if(currentImage >= images.length) {currentImage = 0;}
    document.getElementById("pic").src = images[currentImage];
}
function picLeft() {
    currentImage -= 1;
    if(currentImage < 0) {currentImage = 4;}
    document.getElementById("pic").src = images[currentImage];
}

var text =["The first routers were just IMP computers that were set to run very specific software that would help link other PC's around the world",
    "These IMP computers when then upgraded to PDP-11's a newer model that could more effectively run the software",
    "Eventually minicomputers that only ran this software were used more commonly",
    "As technology advanced these minicomputers where made smaller as the parts needed to make them became smaller",
    "Modern routers contain CPU's and RAM like a PC, but lack any display other than lights. In other words they're just tiny computers without a screen running specific software to help link PC's around the world."];
var currentText = 0;

function textRight() {
    currentText += 1;
    if(currentText === 4){ document.getElementById("rightButton").innerHTML="Learn More"}
    else if(currentText === 5) {window.location='https://www.amazon.com/Where-Wizards-Stay-Up-Late-ebook/dp/B000FC0WP6'}
    document.getElementById("text").innerHTML = text[currentText];
}
function textLeft() {
    currentText -= 1;
    if(currentText < 0) {currentText = 4;}
    document.getElementById("text").innerHTML = text[currentText];
}


var date =["1966 IMP", "1967 PD-11", "1970 atari minicomputer", "1990 cisco router", "Modern Router"];
var currentDate = 0;

function dateRight() {
    currentDate += 1;
    if(currentDate >= date.length) {currentDate = 0;}
    document.getElementById("date").innerHTML = date[currentDate];
}
function dateLeft() {
    currentDate -= 1;
    if(currentDate < 0) {currentDate = 4;}
    document.getElementById("date").innerHTML = date[currentDate];
}
var poslist = ["400px", "450px", "500px", "550px", "600px"];
var pos = 0;
function cycleR(){
    pos +=1;
    document.getElementById("timemark").style.left = poslist[pos];
}
function linktext(){
    if(document.getElementById("rightButton").innerHTML === "Learn More"){
    document.getElementById("amazonLink").style.visibility="visible"}
}
