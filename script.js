document.addEventListener("DOMContentLoaded", function () {
  const aboutImage = document.querySelector(".about-image");

  function checkScroll() {
    const rect = aboutImage.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      aboutImage.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
 
 
 
 
 // Incremento dinámico del número de clientes
   const countElement = document.getElementById('clientes-count');
  let count = 0;
  const target = 10000;
  const increment = Math.ceil(target / 200); // Ajusta la velocidad del contador

  const updateCount = () => {
      count += increment;
      if (count > target) {
          count = target;
      }
      countElement.textContent = count.toLocaleString();

      if (count < target) {
          setTimeout(updateCount, 50); // Ajusta la velocidad
      }
  };

  updateCount();



// carrusel de textimonios 
let currentIndex = 0;
const testimoniosCarousel = document.querySelector('.testimonios-carousel');
const testimonios = document.querySelectorAll('.testimonio');

function showNextTestimonio() {
  currentIndex = (currentIndex + 1) % testimonios.length;
  testimoniosCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextTestimonio, 5000); // Cambia cada 5 segundos