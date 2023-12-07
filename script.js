
// javascript for mobilmeny

        const toggleButton = document.getElementsByClassName('meny-knapp')[0]
const navbarLinks = document.getElementsByClassName('mobilmeny')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



// javascript for slideshow
let currentSlide = 0;
  const slides = document.querySelectorAll('.fade');
  const imageDuration = 20000; // juster tiden bildet vises i millisekunder

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function updateSlide() {
    nextSlide();
    setTimeout(updateSlide, imageDuration); // timeout kaller på verdien i millisekunder 
    //som bildet skal vises. denne verdien er hvor mange millisekunder update funskjonen venter.
  }

  // Viser det første bildet i div-en
  showSlide(currentSlide);

  // starter update slide funskjonen
  updateSlide();