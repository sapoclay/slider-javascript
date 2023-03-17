// Obtener los elementos DOM para el carrusel de imágenes
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

let imageIndex = 1;
let intervalId;

// Definir función para iniciar el deslizador de imágenes automático
const autoSlide = () => {
  // Iniciar la presentación de diapositivas llamando a slideImage() cada 4 segundos
  intervalId = setInterval(() => slideImage(++imageIndex), 4000);
};
// Llamar a la función autoSlide al cargar la página
autoSlide();

// Una función que actualiza la visualización del carrusel para mostrar la imagen especificada
const slideImage = () => {
  // Calcular el índice de imagen actualizado
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Actualizar la visualización del carrusel para mostrar la imagen especificada
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Una función que actualiza la visualización del carrusel para mostrar la imagen siguiente o anterior
const updateClick = (e) => {
  // Detener la presentación de diapositivas automática
  clearInterval(intervalId);
  // Calcular el índice de imagen actualizado en función del botón pulsado
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Reiniciar la presentación de diapositivas automática
  autoSlide();
};

// Agregar event listeners a los botones de navegación
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Agregar event listener mouseover al elemento wrapper para detener la presentación de diapositivas automática
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Agregar event listener mouseleave al elemento wrapper para reiniciar la presentación de diapositivas automática
wrapper.addEventListener("mouseleave", autoSlide);