let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }
function validation(){
  var form = document.getElementById("form");
  var email = document.getElementById("email").Value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
  if(email.match(pattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Valid";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Invalid";
  }
  if(email == ""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}