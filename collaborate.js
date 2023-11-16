var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
  loader.style.display = "none";
    })
const wlink = document.getElementById("wlink")
const dlink = document.getElementById("dlink")
wlink.style.display = "none";
dlink.style.display = "none";

function sendMessage() {
  const fname = document.getElementById("in2");
  const lname = document.getElementById("in4");
  const birthday = document.getElementById("in6");
  const email = document.getElementById("in8");
  const interests = document.getElementById("in10");
  const phone = document.getElementById("in12");
  const region = document.getElementById("in14");
  const security = document.getElementById("in16");
  const operator = document.getElementById("in18");
  const t1 = document.getElementById("in1");
  const t2 = document.getElementById("in3");
  const t3 = document.getElementById("in5");
  const t4 = document.getElementById("in7");
  var job = "security"

  if (security.checked == true){
    job = "security"
  } else if (operator.checked == true){
    job = "operator"
  }

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1160813022273622047/qYMngSnlFknHgCaxeSZMzBe32itYU7DgBW95GmoHJ7Djk4QMWcqTbMBckvHLbCt-T-zH");
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: "VLN FEST WEB - Collaborates",
    avatar_url: "",
    content: "User named **"+fname.value+" "+lname.value+"**, with a birthday **"+birthday.value+"**, email: **"+email.value+"**, interests: **"+interests.value+"**, phone: **"+phone.value+"** and that lives in **"+region.value+"**. Wants to be **"+job+"**."
  }
  request.send(JSON.stringify(params));
  
 document.getElementById("regform").style.display = "none";
 document.getElementById("regbutton").style.display = "none";
 wlink.style.display = "flex";
 dlink.style.display = "flex";
 const postdes = document.getElementById("postdes")
 postdes.innerHTML = "Your registration form is now pending, one of our operators will notice that. We are using social media to communicate with our staff members. As you can see, join links & QR-codes is appeared. We are using mostly whatsapp because it has features enough that we need to organize & communicate. But you can join the group only when the admin will allow you to join. You can be a member in staff chat only when one of our operators will agree with the information that you have send in the registration form. Make sure that all information you have send is yours and not from others. This stem is required if you want to continue."
}
