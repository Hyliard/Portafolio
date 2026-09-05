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

// Estado y relación accesibles para los textos expandibles.
document.querySelectorAll(".read-more").forEach((button, index) => {
  const text = button.previousElementSibling;
  text.id = `more-text-${index}`;
  text.hidden = true;
  button.setAttribute("aria-controls", text.id);
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", () => {
    text.hidden = !text.hidden;
    button.setAttribute("aria-expanded", String(!text.hidden));
    button.textContent = text.hidden ? "Leer más" : "Leer menos";
  });
});
