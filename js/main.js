let html = document.querySelector("html");
let tituloBanner = document.querySelector(".app__title");
let imagenBanner = document.querySelector(".app__image");
let botones = document.querySelectorAll(".app__card-button");
let botonEnfoque = document.querySelector(".app__card-button--enfoque");
let botonDescansoCorto = document.querySelector(".app__card-button--corto");
let botonDescansoLargo = document.querySelector(".app__card-button--largo");

botonEnfoque.addEventListener("click", () => {
    cambiarContexto("enfoque");
    botonEnfoque.classList.add("active");
});

botonDescansoCorto.addEventListener("click", () => {
    cambiarContexto("descanso-corto");
    botonDescansoCorto.classList.add("active");
});

botonDescansoLargo.addEventListener("click", () => {
    cambiarContexto("descanso-largo");
    botonDescansoLargo.classList.add("active");
});

const cambiarContexto = (contexto) => {
    // Elimino la clase activo de todos los botones
    botones.forEach((boton) => boton.classList.remove("active"));

    html.setAttribute("data-contexto", contexto);
    imagenBanner.src = `/img/${contexto}.png`;

    switch (contexto) {
        case "enfoque":
            tituloBanner.innerHTML = `Optimiza tu productividad, <br> <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
            break;

        case "descanso-corto":
            tituloBanner.innerHTML = `¿Qué tal tomar un respiro? <br> <strong class="app__title-strong">!Haz una pausa corta!</strong>`;
            break;

        case "descanso-largo":
            tituloBanner.innerHTML = `Hora de volver a la superficie <br> <strong class="app__title-strong">Haz una pausa larga.</strong>`;
            break;

        default:
            break;
    }
};

// document.querySelector(".app__card-button--corto").onclick = () => {

//     html.setAttribute("data-contexto", "descanso-corto");

// };
