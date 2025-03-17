/*
Nicola Clark
16MAR25

Adapted from https://javascript30.com - Slide in on Scroll
*/

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function onSlide() {
  imagesToSlide.forEach((img) => {
    // should start sliding when image is half-visible; this var is the scrollY
    // where the image is halfway into the viewport.
    const slideInAtY = window.scrollY + window.innerHeight - img.height / 2;

    const imgBottom = img.offsetTop + img.height;

    const isHalfShown = slideInAtY > img.offsetTop;
    const isNotAboveViewport = window.scrollY < imgBottom;

    if (isHalfShown && isNotAboveViewport) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

const imagesToSlide = document.querySelectorAll('img.slide-in');
window.addEventListener('scroll', debounce(onSlide));
