var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
var f1 = 0;
const followEmail = document.getElementById("followEmail");
const b4 = document.getElementById("b4a");
followEmail.style.display = "none";

function collaborate(){
  window.open("https://vlnfest.st1mul.repl.co/pages/collaborate.html");
}

function followEvent(){
  if (f1 == 0){
    f1 = 1;
    followEmail.style.display = "flex";
    b4.style.display = "flex";
  }
}

function sendMail(){
  followEmail.style.display = "none";
  b4.style.display = "none";

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1160813022273622047/qYMngSnlFknHgCaxeSZMzBe32itYU7DgBW95GmoHJ7Djk4QMWcqTbMBckvHLbCt-T-zH");
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: "VLN FEST WEB - Follow",
    avatar_url: "",
    content: "A user wants to follow the event. Email: **"+followEmail.value+"**."
  }
  request.send(JSON.stringify(params));
}
