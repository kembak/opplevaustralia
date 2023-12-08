
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


  // bildegalleri for reisemål

    function showImage(galleryIndex, index) {
        const gallery = document.querySelectorAll('.gallery')[galleryIndex];
        const images = gallery.querySelectorAll('.galleribilde img');

        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }

        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
                image.style.width = '100%';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function prevImage(galleryIndex) {
        const gallery = document.querySelectorAll('.gallery')[galleryIndex];
        const currentIndex = Array.from(gallery.querySelectorAll('.galleribilde img')).findIndex(img => img.style.display === 'block');
        showImage(galleryIndex, currentIndex - 1);
    }

    function nextImage(galleryIndex) {
        const gallery = document.querySelectorAll('.gallery')[galleryIndex];
        const currentIndex = Array.from(gallery.querySelectorAll('.galleribilde img')).findIndex(img => img.style.display === 'block');
        showImage(galleryIndex, currentIndex + 1);
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Initialize each gallery on page load
        const galleries = document.querySelectorAll('.gallery');
        galleries.forEach((gallery, index) => {
            showImage(index, 0);
        });
    });

//javascript for kontaktskjema
function submitContactForm() {
  // Perform form validation here if needed

  // Assuming the form is valid, you can redirect to the homepage (index.html)
  window.location.href = 'index.html';
}