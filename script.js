document.addEventListener("DOMContentLoaded", function () {
    var heroText = document.getElementById("heroText");

    heroText.addEventListener("animationend", function () {
        document.querySelector('.usp').classList.add('visible');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);
  
    function revealOnScroll() {
      var elementsToShow = document.querySelectorAll(".hidden");
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("visible");
        }
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Trigger the initial check
    revealOnScroll();
  });


  




  const blackText = document.querySelector('.black-text');
  const greyText = document.querySelector('.grey-text');
  
  const totalHeight = blackText.offsetHeight + greyText.offsetHeight;
  
  function updateColor() {
    const scrollY = window.scrollY;
    const progress = scrollY / totalHeight;
  
    // Use a power function to slow down the color spread
    const slowProgress = Math.pow(progress, 5);
  
    greyText.style.color = `hsl(0, 0%, ${100 - slowProgress * 100}%)`;
  }
  
  window.addEventListener('scroll', updateColor);
  updateColor(); // Initial color update
  