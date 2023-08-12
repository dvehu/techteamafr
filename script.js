const nav = document.getElementById('header');
const mobileNav = document.getElementById('navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden"),
        mobileNav.classList.remove("bring-it"),
        document.getElementById('chat').classList.add('komot'),
        document.getElementById('close-chat').classList.add('close-chat-padding')
    }

    else {
      nav.classList.remove("nav--hidden"),
      document.getElementById('chat').classList.remove('komot'),
      document.getElementById('close-chat').classList.remove('close-chat-padding')
    }
    lastScrollY = window.scrollY
});

window.addEventListener('scroll', () => {
    
    if (window.scrollY >= 400 ) {
        nav.classList.add("nav-bg-blur")

    } else {
        nav.classList.remove("nav-bg-blur")
    }

    lastScrollY = window.scrollY
});

const chat = document.getElementById('chat-wrapper');
const closechat = document.getElementById('close-chat');

document.getElementById('close-chat').addEventListener('click', function() {
      if (1>0) {
        document.getElementById('chat-wrapper').classList.add('komot-chat')
        closechat.style.display = 'none'     
      }
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

document.getElementById('chat').addEventListener('click', function() {
  setTimeout(() => {  
    document.querySelector('.cht1').classList.add("chtDisplay")
}, 3000);
});

document.getElementById('chat').addEventListener('click', function() {
  setTimeout(() => {  
    document.querySelector('.cht2').classList.add("chtDisplay")
}, 4000);
});

document.querySelector('.options').addEventListener('click', function() {  
  document.querySelector('.cht3').classList.add("chtDisplay"),
  document.querySelector('.userChat').classList.add("chtDisplay")
});

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
  closechat.style.display = 'none' 
});