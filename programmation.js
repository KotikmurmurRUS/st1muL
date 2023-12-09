var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none";
})

// Function to add or update a cookie
function addCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
  console.log("Added new cookie named " + name + "!");
  checkUserCookie();
}

function checkUserCookie() {
  var userCookieValue = getCookie('User');
  if (userCookieValue === 'VLNfest2980_WEB') {
    console.log('Programmation menu unlocked.');
    document.getElementById("l1").style.background = "#444";
    document.getElementById("l2").style.background = "#444";
    document.getElementById("l3").style.background = "#444";
    document.getElementById("l4").style.background = "#c44";
    document.getElementById("l5").style.background = "#c44";
    document.getElementById("l1t").innerHTML = "Radio 2";
    document.getElementById("l2t").innerHTML = "DJ Nelasta";
    document.getElementById("l3t").innerHTML = "Black Coffee";
    document.getElementById("l4t").innerHTML = "Quiet";
    document.getElementById("l5t").innerHTML = "Quiet";
    document.getElementById("postT").innerHTML = "Programmation - Christmas '23";
    document.getElementById("infoDesk").style.display = "flex";
    document.getElementById("arrowDiv").style.background = "#444";
    document.getElementById("arrowDiv").style.left = "12%";
    document.getElementById("arrowDiv").style.display = "flex";
    document.getElementById("extendedName").innerHTML = "Starting soon";
    document.getElementById("extendedDescr").innerHTML = "There is no one that's currently lining up, our festival days will start in a few days. Stay tuned by joining our social media channels.";
    
    // Do something here if the condition is met
  } else {
    console.log('Cookie does not exist.');
    document.getElementById("infoDesk").style.display = "none";
  }
}

// Example: Check if the 'User' cookie has a value of 'test'
var userCookieValue = getCookie('User');
if (userCookieValue === 'VLNfest2980_WEB') {
  console.log('User cookie has a value of "test".');
} else {
  console.log('User cookie does not have a value of "test".');
}

function removeCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Function to get the value of a cookie by name
function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

checkUserCookie();
