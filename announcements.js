var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

var post1E = 0;
var post2E = 0;
var post3E = 0;
var post1 = document.getElementById("post1");
var post2 = document.getElementById("post2");
var post3 = document.getElementById("post3");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");

post1.style.display = "none";
post2.style.display = "none";
post3.style.display = "none";

function createPost(title, descr){
if (post1E == 0){
post1E = 1;
title1.innerHTML = title;
desc1.innerHTML = descr;
post1.style.display = "flex";
} else {
if (post2E == 0){
post2E = 1;
title2.innerHTML = title;
desc2.innerHTML = descr;
post2.style.display = "flex";
} else {
if (post3E == 0){
post3E = 1;
title3.innerHTML = title;
desc3.innerHTML = descr;
post3.style.display = "flex";
}
}
}
}

let myTitle = "Planning our 1st event!";
let myDescr = "Dear visitors, we are currently planning our first event. The beginning of our event will be public (outside), most part of the event will be private (inside). Our date is already released and is planned 30 + 31 december 2023. Starting 6PM to 10PM on 30 & 31 december + 3 hours private event on the last festival day. Tickets can be purchased on this website or by communicating with us. Make sure to be jounger than 16, please follow our rules when entering our festival zone(s). No expectations expected, reserver a pass before visiting.";
createPost(myTitle, myDescr);
