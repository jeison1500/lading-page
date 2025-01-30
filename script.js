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
 document.addEventListener("DOMContentLoaded", function () {
  let contadorIniciado = false;

  function iniciarContador() {
      const elemento = document.getElementById("clientes-count");
      const objetivo = 10000; // Número final del contador
      const duracion = 2000; // Duración en milisegundos (2 segundos)
      const intervalo = 30; // Cada cuánto tiempo aumenta el número (ms)

      let incremento = Math.ceil(objetivo / (duracion / intervalo));
      let valorActual = 0;

      let animacion = setInterval(() => {
          valorActual += incremento;
          if (valorActual >= objetivo) {
              elemento.textContent = objetivo.toLocaleString(); // Formato con comas
              clearInterval(animacion);
          } else {
              elemento.textContent = valorActual.toLocaleString();
          }
      }, intervalo);
  }

  // Intersection Observer para detectar cuando el contador es visible
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !contadorIniciado) {
          iniciarContador();
          contadorIniciado = true; // Evita que se reinicie la animación
      }
  });

  observer.observe(document.getElementById("clientes-count"));
});




// carrusel de textimonios 
let currentIndex = 0;
const testimoniosCarousel = document.querySelector('.testimonios-carousel');
const testimonios = document.querySelectorAll('.testimonio');

function showNextTestimonio() {
  currentIndex = (currentIndex + 1) % testimonios.length;
  testimoniosCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextTestimonio, 5000); // Cambia cada 5 segundos