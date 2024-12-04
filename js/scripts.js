// Obtener los elementos para cambiar el tema y el idioma
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const textToChange = document.querySelectorAll("[data-section]");  // Selecciona todos los elementos con data-section

// Función para cambiar el idioma
const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  // Actualiza el texto de la página según el idioma seleccionado
  textToChange.forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;
    element.innerHTML = texts[section][value];
  });
};

// Cambia el tema (oscuro/ claro) al hacer clic
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = 'assets/icons/sun.svg';
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

// Cambia el color primario al hacer clic en un color
toggleColors.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains('colors__item')) {
    const color = target.dataset.color;
    rootStyles.setProperty("--primary-color", color);
  }
});

// Función para alternar entre "Leer más" y "Leer menos"
function toggleTextVisibility(event) {
  event.preventDefault(); // Prevenir la acción predeterminada del enlace (ir al #)
  
  const moreText = event.target.previousElementSibling;  // Obtener el texto adicional
  const readMoreLink = event.target;  // Obtener el enlace "Leer más"
  
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";  // Mostrar el texto adicional
    readMoreLink.textContent = "Leer menos";  // Cambiar el texto del enlace
  } else {
    moreText.style.display = "none";  // Ocultar el texto adicional
    readMoreLink.textContent = "Leer más";  // Volver al texto original
  }
}

// Agregar el evento para los enlaces "Leer más"
const readMoreLinks = document.querySelectorAll(".read-more");
readMoreLinks.forEach(link => {
  link.addEventListener("click", toggleTextVisibility);
});
 