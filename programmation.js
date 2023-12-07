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
}

function checkUserCookie() {
  var userCookieValue = getCookie('User');
  if (userCookieValue === 'VLNfest2980_WEB') {
    console.log('User cookie has a value of "Test".');
    // Do something here if the condition is met
  } else {
    console.log('User cookie does not have a value of "Test" or the cookie does not exist.');
  }
}

// Example: Check if the 'User' cookie has a value of 'test'
var userCookieValue = getCookie('User');
if (userCookieValue === 'test') {
  console.log('User cookie has a value of "test".');
} else {
  console.log('User cookie does not have a value of "test".');
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
