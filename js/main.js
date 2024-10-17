let html = document.querySelector("html");
let tituloBanner = document.querySelector(".app__title");
let imagenBanner = document.querySelector(".app__image");
let botones = document.querySelectorAll(".app__card-button");
let botonEnfoque = document.querySelector(".app__card-button--enfoque");
let botonDescansoCorto = document.querySelector(".app__card-button--corto");
let botonDescansoLargo = document.querySelector(".app__card-button--largo");
let alternarMusica = document.getElementById("alternar-musica");
let musicaRelajante = new Audio("./sonidos/luna-rise-part-one.mp3");
let tiempoTranscurrido = 1500;
let cardTimer = document.querySelector("#timer");
let botonComenzar = document.getElementById("start-pause");
let botonComenzarTexto = document.getElementById("start-pause--span");
let intervalo = null;
let sonidoPlay = new Audio("./sonidos/play.wav");
let sonidoPausa = new Audio("./sonidos/pause.mp3");
let sonidoTiempoFin = new Audio("./sonidos/beep.mp3");
let imagenPlayPausa = document.getElementById("playPausa");

// funcion para reproducir la musica sin fin
musicaRelajante.loop = true;

// funcion para cambiar el contexto de la pagina y sus elementos
const cambiarContexto = (contexto) => {

    mostrarTiempo();
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

// Funcion para iniciar cuenta regresiva
const cuentaRegresiva = () => {
    if (tiempoTranscurrido <= 0) {
        cardTimer.innerHTML = "Fin";
        reiniciarCuentaRegresiva();
        return;
    }
    if (tiempoTranscurrido <= 6) {
        sonidoTiempoFin.play();
    }
    mostrarTiempo();
    tiempoTranscurrido -= 1;
};

// Funcion para iniciar y pausar cuenta regresiva
const iniciarPausar = () => {
    if (intervalo) {
        sonidoPausa.play();
        reiniciarCuentaRegresiva();
        return;
    }
    sonidoPlay.play();
    imagenPlayPausa.src = `/img/pause.png`;
    botonComenzarTexto.innerText = 'Pausar';
    intervalo = setInterval(cuentaRegresiva, 1000);
};

// Funcion para reiniciar la cuenta regresiva
const reiniciarCuentaRegresiva = () => {
    imagenPlayPausa.src = `/img/play_arrow.png`;
    botonComenzarTexto.innerText = 'Comenzar';
    clearInterval(intervalo);
    intervalo = null;
};

// función para mostrar el tiempo formateado
const mostrarTiempo = () => {
    let tiempo = new Date(tiempoTranscurrido * 1000);
    let tiempoFormato = tiempo.toLocaleTimeString('es-CO', { minute: '2-digit', second: '2-digit' });
    cardTimer.innerHTML = `${tiempoFormato}`;
};

mostrarTiempo();

/* 

document.querySelector(".app__card-button--corto").onclick = () => {
html.setAttribute("data-contexto", "descanso-corto");

*/

// Se Agregan eventos de click a los botones
botonEnfoque.addEventListener("click", () => {
    reiniciarCuentaRegresiva();
    tiempoTranscurrido = 1500;
    cambiarContexto("enfoque");
    botonEnfoque.classList.add("active");
});

botonDescansoCorto.addEventListener("click", () => {
    reiniciarCuentaRegresiva();
    tiempoTranscurrido = 300;
    cambiarContexto("descanso-corto");
    botonDescansoCorto.classList.add("active");
});

botonDescansoLargo.addEventListener("click", () => {
    reiniciarCuentaRegresiva();
    tiempoTranscurrido = 900;
    cambiarContexto("descanso-largo");
    botonDescansoLargo.classList.add("active");
});

// Se agrega Evento de change para alternar la musica
alternarMusica.addEventListener("change", () => {
    //operador ternario para reproducir o pausar la musica
    alternarMusica.checked ? musicaRelajante.play() : musicaRelajante.pause();
});

// Se agrega Evento de click para iniciar o pausar la cuenta regresiva
botonComenzar.addEventListener("click", iniciarPausar);


