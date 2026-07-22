// Obtener los elementos para cambiar el tema y el idioma
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const colorSchemePreference = window.matchMedia("(prefers-color-scheme: dark)");

const moonIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79"></path>
  </svg>`;

const sunIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"></path>
  </svg>`;

const textToChange = document.querySelectorAll("[data-section]");  // Selecciona todos los elementos con data-section

// Función para cambiar el idioma
const changeLanguage = async (language) => {
  const requestJson = await fetch(`assets/icons/languages/${language}.json`);
  const texts = await requestJson.json();

  // Actualiza el texto de la página según el idioma seleccionado
  textToChange.forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;
    element.innerHTML = texts[section][value];
  });
};

const applyTheme = (darkModeEnabled) => {
  document.documentElement.dataset.theme = darkModeEnabled ? "dark" : "light";
  toggleIcon.innerHTML = darkModeEnabled ? sunIcon : moonIcon;
  toggleTheme.setAttribute(
    "aria-label",
    darkModeEnabled ? "Activar modo claro" : "Activar modo oscuro"
  );
};

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme ? savedTheme === "dark" : colorSchemePreference.matches);

toggleTheme.addEventListener("click", () => {
  const darkModeEnabled = document.documentElement.dataset.theme !== "dark";
  applyTheme(darkModeEnabled);
  localStorage.setItem("portfolio-theme", darkModeEnabled ? "dark" : "light");
});

colorSchemePreference.addEventListener("change", (event) => {
  if (!localStorage.getItem("portfolio-theme")) {
    applyTheme(event.matches);
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

// Mantiene compatibilidad con los manejadores inline existentes.
function toggleText(event) {
  toggleTextVisibility(event);
}

// Agregar el evento para los enlaces "Leer más"
const readMoreLinks = document.querySelectorAll(".read-more");
readMoreLinks.forEach(link => {
  link.setAttribute("role", "button");
  link.setAttribute("aria-expanded", "false");
  link.addEventListener("click", (event) => {
    event.currentTarget.setAttribute(
      "aria-expanded",
      String(event.currentTarget.textContent === "Leer menos")
    );
  });
});
 
