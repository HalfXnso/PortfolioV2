document.getElementById("joel").addEventListener("click", function () {
  // Cambiamos la opacidad a 0 para la transición
  this.style.opacity = "0";

  // Después de 500ms (el tiempo de la transición), ocultamos la imagen
  setTimeout(() => {
    this.style.display = "none"; // Ocultamos la imagen
  }, 500); // Coincide con el tiempo de la transición
});

var modal = document.getElementById("miModal");
var btn = document.getElementById("abrir-modal");
var span = document.getElementsByClassName("cerrar")[0];

// Función para abrir el modal
function abrirModal() {
  modal.style.display = "block"; // Mostrar el modal
  setTimeout(() => {
    modal.classList.add("modal-activo"); // Agregar clase para activar transiciones
  }, 10); // Retardo para asegurar que se aplique la clase después de mostrarlo
}

// Función para cerrar el modal
function cerrarModal() {
  modal.classList.remove("modal-activo"); // Quitar clase de transición
  setTimeout(() => {
    modal.style.display = "none"; // Ocultar el modal después de la transición
  }, 400); // Tiempo igual al de la transición
}

// Cuando el usuario hace clic en el botón, abrir el modal
btn.onclick = abrirModal;

// Cuando el usuario hace clic en el botón "cerrar", cerrar el modal
span.onclick = cerrarModal;

// Cuando el usuario hace clic fuera del modal, cerrarlo
window.onclick = function (event) {
  if (event.target == modal) {
    cerrarModal();
  }
};
