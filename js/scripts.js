const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
})


// Cambia el tema al hacer clic en el botón
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
    const target = e.target;  // Obtener el elemento que se hizo clic
    if (target.classList.contains('colors__item')) {  // Asegurarse de que se hizo clic en un color
        const color = target.dataset.color;  // Obtener el color desde el atributo data-color
        rootStyles.setProperty("--primary-color", color);
    }
});
