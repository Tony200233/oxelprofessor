

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


