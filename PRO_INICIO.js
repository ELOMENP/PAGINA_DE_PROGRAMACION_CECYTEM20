document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 3000); // Cambia a la siguiente imagen cada 3 segundos
  
  const text = "Hola mi nombre es popy y es un placer conocerte !Bueno estaré aquí para enseñarte más de este increíble mundo de la programación, bueno estamos en el inicio"; // Texto a escribir
  const textContainer = document.getElementById("text-container");
  let index = 0;
  let wordsWritten = 0;

  function typeWriter() {
    if (index < text.length) {
      if (wordsWritten === 10) {
        textContainer.innerHTML += "<br>"; // Agrega un salto de línea después de diez palabras
        wordsWritten = 0; // Reinicia el contador de palabras
      }
      if (text.charAt(index) === ' ') {
        wordsWritten++; // Incrementa el contador de palabras si encuentra un espacio
      }
      textContainer.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Velocidad de escritura (en milisegundos)
    }
  }

  typeWriter(); // Llamamos a la función para iniciar la escritura
});
