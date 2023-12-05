// javascript for enkel søkeboks

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchField = document.getElementById('searchField');

    searchButton.addEventListener('click', function () {
        // Gjør søkefeltet synlig med style.display og kaller på CSS flex for riktig formattering.
        searchField.style.display = (searchField.style.display === 'none' || searchField.style.display === '') ? 'flex' : 'none';
    });
});


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