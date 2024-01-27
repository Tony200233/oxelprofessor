const observer2 = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('square-animation');
          }, index * 3000); // Adjust the delay for each box
      } else {
          entry.target.classList.remove('square-animation');
      }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.square');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer2.observe(element));

let myDiv = document.getElementById("my-div");
//Detect touch device
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  myDiv.style.left = x - 50 + "px";
  myDiv.style.top = y - 50 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});


const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      menu.classList.toggle('active');
    });

    function showModal() {
      document.getElementById('modalOverlay2').style.display = 'block';
  }

  function closeModal() {
      document.getElementById('modalOverlay2').style.display = 'none';
  }



  let currentScreen = 0;

  function showPopup() {
      document.getElementById('popup-container').style.display = 'flex';
  }

  function showScreen(direction) {
      const content = document.querySelector('.popup-content2');
      const screens = document.querySelectorAll('.popup-screen');
      const screenWidth = screens[0].offsetWidth;

      if (direction === 'next' && currentScreen < screens.length - 1) {
          currentScreen++;
      } else if (direction === 'prev' && currentScreen > 0) {
          currentScreen--;
      }

      const translateValue = -currentScreen * screenWidth;
      content.style.transform = `translateX(${translateValue}px)`;
  }

  function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
  }

    const playButton = document.querySelector('.play-button');
    const video = document.getElementById('my-video');

    playButton.addEventListener('click', () => {
      video.play();
      playButton.style.display = 'none'; // Hide the button
    });

    const video1 = document.getElementById('my-video');

    video.addEventListener('play', () => {
      video1.style.filter = 'none'; // Remove the blur filter
    });

    video1.addEventListener('pause', () => {
      video1.style.filter = 'blur(5px)'; // Reapply the blur filter
    });

    const video2 = document.getElementById('my-video');

    video2.addEventListener('click', () => {
      // Pause or play the video based on its current state
      if (video2.paused) {
        video2.play();
      } else {
        video2.pause();
      }
    });

    video.addEventListener('ended', () => {
      playButton.style.display = 'block';
    });



    const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




 


    const processSection = document.querySelector('.process-section');
const processEffect = document.querySelector('.process-effect');
const effectLine = document.querySelector('.effectline');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      processEffect.classList.add('active');
    } else {
      processEffect.classList.remove('active');
    }
  });
}, {
  threshold: 0.5,
});

observer.observe(processSection);

const processSteps = document.querySelectorAll('.first-p');
let activeStep = 1;

const animateStep = (step) => {
  for (let i = 0; i < processSteps.length; i++) {
    if (i + 1 <= step) {
      processSteps[i].classList.add('active');
    } else {
      processSteps[i].classList.remove('active');
    }
  }
};

effectLine.addEventListener('click', () => {
  activeStep = Math.min(activeStep + 1, processSteps.length);
  animateStep(activeStep);
});

animateStep(activeStep); // Initial step animation

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


