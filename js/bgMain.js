const parallaxBackground = document.querySelector('.parallax-bg');

window.addEventListener('scroll', function () {
  const scrollValue = window.scrollY;
  parallaxBackground.style.backgroundPositionY = -scrollValue * 0.4 + "px";
});