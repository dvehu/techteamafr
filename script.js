
const nav = document.getElementById('header');
const mobileNav = document.getElementById('navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if (window.scrollY <= 500) {
      document.querySelector(".scroll-up").classList.remove("show-scroll")
    }
    else if (lastScrollY < window.scrollY) {
        document.querySelector(".scroll-up").classList.add("show-scroll"),
        document.getElementById('chat').classList.add('komot'),
        document.getElementById('close-chat').classList.add('close-chat-padding');
    }

    else {
      document.getElementById('chat').classList.remove('komot');
    }
    lastScrollY = window.scrollY
});

const chat = document.getElementById('chat-wrapper');
const closechat = document.getElementById('close-chat');

document.getElementById('close-chat').addEventListener('click', function() {
      document.getElementById('chat-wrapper').classList.add('komot-chat'),
      closechat.style.display = 'none';
    });


// Toggle Menu Button

document.querySelector('#menu_btn').addEventListener('click', function(){
  if (!document.querySelector('#navbar').classList.contains('bring-it')) {
    document.querySelector('#navbar').classList.add('bring-it'),
    document.querySelector('#menu_btn').classList.add('closeMenu');
  }else {
    document.querySelector('#navbar').classList.remove('bring-it'),
    document.querySelector('#menu_btn').classList.remove('closeMenu');
  }
});

// End-- Toggle Menu Button

document.querySelector('.theserviceDropDown').addEventListener('click', function(){
  if (document.querySelector('.serviceDropDown').classList.contains('serviceDropDownDsiplay')) {
    document.querySelector('.serviceDropDown').classList.remove('serviceDropDownDsiplay');
  }else {
    document.querySelector('.serviceDropDown').classList.add('serviceDropDownDsiplay');
  }
});


document.querySelector('.chatBotImg').addEventListener('click', function() {
  document.querySelector('.chatBotImg').style.display = 'none'
  setTimeout(() => {  
    document.querySelector('.cht1').classList.add("chtDisplay")
}, 1000);
});

document.querySelector('.chatBotImg').addEventListener('click', function() {
  setTimeout(() => {  
    document.querySelector('.cht2').classList.add("chtDisplay")
}, 2000);
});

document.querySelector('.options').addEventListener('click', function() {  
  document.querySelector('.cht3').classList.add("chtDisplay"),
  document.querySelector('.userChat').classList.add("chtDisplay")
});


document.querySelector('#chat').addEventListener('click', function(){
  document.getElementById('chatOptions').classList.add('bring-chatOptions'),
  document.querySelector('#chat').classList.add('komot-chat')
  closechat.style.display = 'none' 
});

document.querySelector('.botChat').addEventListener('click', function(){
  document.getElementById('chatInterface').classList.add('bring-chatInterface'),
  document.querySelector('.chatOptions').style.display = 'none';
});

document.querySelector('#close-chat').addEventListener('click', function(){
  document.querySelector('#chat').classList.add('komot-chat'),
  closechat.style.display = 'none'; 
});


// ANIMATE ON SCROLL
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
// END - ANIMATE ON SCROLL


document.querySelector('.asideNav').addEventListener('click', function(){

  if(document.querySelector('#navbar').classList.contains('bring-it')) {
    document.querySelector('#navbar').classList.remove('bring-it'),
    document.querySelector('#menu_btn').classList.remove('closeMenu');
  }

  
document.querySelector('.next').addEventListener('click', function() {
  if (document.querySelector('.next a').textContent == '>')
  {
      document.querySelector('.next a').textContent = '<'
      document.getElementById('banner-2').classList.add('banner-2-appear'),
      document.getElementById('banner-1').classList.add('banner-1-remove'),
      document.querySelector('.watcher button:nth-child(1)').classList.add('color-khaki'),
      document.querySelector('.watcher button:nth-child(2)').classList.add('color-dark')
  }
  else if (document.querySelector('.next a').textContent == '<')
  {
    document.querySelector('.next a').textContent = '>'
    document.getElementById('banner-1').classList.remove('banner-1-remove'),
    document.getElementById('banner-2').classList.remove('banner-2-appear'),
    document.querySelector('.watcher button:nth-child(1)').classList.remove('color-khaki'),
    document.querySelector('.watcher button:nth-child(2)').classList.remove('color-dark')
  }
});


function slider() {
  setTimeout(() => {  
    document.getElementById('banner-2').classList.add('banner-2-appear'),
    document.getElementById('banner-1').classList.add('banner-1-remove'),  
    document.querySelector('.watcher button:nth-child(1)').classList.add('color-khaki'),
    document.querySelector('.watcher button:nth-child(2)').classList.add('color-dark')
  }, 4000);
  
  setTimeout(() => {  
    document.getElementById('banner-1').classList.remove('banner-1-remove'),
    document.getElementById('banner-2').classList.remove('banner-2-appear'),
    document.querySelector('.watcher button:nth-child(1)').classList.remove('color-khaki'),
    document.querySelector('.watcher button:nth-child(2)').classList.remove('color-dark')
  }, 8000);
}

slider();



  if (document.querySelector('.serviceDropDown').classList.contains('serviceDropDownDsiplay')) {
    document.querySelector('.serviceDropDown').classList.remove('serviceDropDownDsiplay');
  }

});