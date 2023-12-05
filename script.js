// javascript kode for enkel søkeboks

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchField = document.getElementById('searchField');

    searchButton.addEventListener('click', function () {
        // Toggle the visibility of the search field
        searchField.style.display = (searchField.style.display === 'none' || searchField.style.display === '') ? 'flex' : 'none';
    });
});


//slideshow
let currentSlide = 0;
  const slides = document.querySelectorAll('.fade');
  const imageDuration = 20000; // Adjust the duration each image is displayed (in milliseconds)
  const fadeDuration = 500; // Adjust the duration of the fade animation (in milliseconds)

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
    setTimeout(updateSlide, imageDuration - fadeDuration); // Adjust the timeout to control the gap between image changes
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Start the automatic slideshow
  updateSlide();