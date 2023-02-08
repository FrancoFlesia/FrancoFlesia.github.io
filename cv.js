var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

var citas = [
    "¿Sabías que Ada Lovelace fue la primera programadora del mundo? Hija del famoso poeta Lord Byron, nació en 1815 y desafió las limitaciones que imponía la lógica victoriana para la mujer. Creó un algoritmo -inédito en ese entonces- pensado para ser procesado por una máquina. Así, sentó la bases de lo que sería la computación.", 
    "En Estados Unidos, en los años 80, se bautizó como Ada un lenguaje de programación multipropósito orientado a objetos y concurrente.",
    "Ada escribió el algoritmo para calcular los valores de los números de Bernoulli utilizando dos bucles, detalló como hacer operaciones trigonométricas que empleaban variables en la máquina analítica de Babbage y definió el uso de tarjetas perforadas para programar la máquina.",
    "Lovelace pensó que las notas y los sonidos podían ser traducidos al lenguaje de la máquina analítica para crear melodías complejas. Esta iniciativa era un primer paso en lo que eventualmente sería la música desarrollada por algoritmos.",
    "Ada era fanática de las carreras de caballo y quiso aplicar sus conocimientos matemáticos para poder idear un modelo que le permitiera ganar las apuestas.",
]
function nuevaCita() {
    var numAleatorio = Math.floor(Math.random()*(citas.length));
    document.getElementById("mostrarCita").innerHTML = citas[numAleatorio];
}
    