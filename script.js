const topHome = document.getElementById("topHome");
const topAbout = document.getElementById("topAbout");
const topImages = document.getElementById("topImages");
const topServices = document.getElementById("topServices");

function slideTo(name) {
  var element = document.getElementById(name);
  console.log(element);
  element.scrollIntoView({
    behavior: "smooth",
  });
}

topHome.addEventListener("click", (e) => {
  e.preventDefault();
  slideTo("home");
});

topAbout.addEventListener("click", (e) => {
  e.preventDefault();
  slideTo("about");
});
topImages.addEventListener("click", (e) => {
  e.preventDefault();
  slideTo("images");
});
topServices.addEventListener("click", (e) => {
  e.preventDefault();
  slideTo("services");
});

const slides = document.querySelectorAll(".imageSlides");
const pre = document.querySelector(".previous");
const next = document.querySelector(".next");
const imgF = document.getElementById("first-im");
const imgS = document.getElementById("second-im");
const imgT = document.getElementById("third-im");

let index = 0;
let cnt = 0;
let negative = -1;
let positive = 1;

function show(num) {
  let slides = document.querySelectorAll(".imgs");
  if (num < 0) {
    index = slides.length - 1;
    cnt = 0;
    slides[index].style.display = "block";
  }
  if (num >= 0) {
    index = num;
    cnt = 0;
    slides[index].style.display = "block";
    if(index!==2) slides[index+1].style.display = "none";
    if(index!==0) slides[index-1].style.display = "none";
    if(index==0) slides[index+2].style.display = "none";   
    
  }
}
pre.addEventListener("click", () => {
  cnt++;
  index -= cnt;
  show(index);
});

next.addEventListener("click", () => {
  cnt++;
  index += cnt;
  if(index>2){
    index=0;
  }
  show(index);
});
