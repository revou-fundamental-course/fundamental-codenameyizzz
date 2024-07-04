function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }


  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


 var typingEffect = new Typed(".typedText",{
    strings : ["Student","Learner","Developer"],
    loop : true,
    typeSpeed : 130,  
    backSpeed : 90,
    backDelay : 2000
 })


 const scrollRev = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1200,
        reset: true     
 })


scrollRev.reveal('.featured-text-card',{})
scrollRev.reveal('.featured-name',{delay: 100})
scrollRev.reveal('.featured-text-info',{delay: 200})
scrollRev.reveal('.featured-text-btn',{delay: 200})
scrollRev.reveal('.social_icons',{delay: 200})
scrollRev.reveal('.featured-image',{delay: 300})


scrollRev.reveal('.project-box',{interval: 200})

scrollRev.reveal('.top-header',{})

const scrollRevLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1600,
  reset: true
})

scrollRevLeft.reveal('.about-info',{delay: 100})
scrollRevLeft.reveal('.contact-info',{delay: 100})

const scrollRevRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

scrollRevRight.reveal('.skills-box',{delay: 100})
scrollRevRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)