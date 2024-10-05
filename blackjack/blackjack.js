let palos = ["corazones", "picas", "tréboles", "diamantes"];
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
let baraja = [];
let jugada = false; // Comprueba si estamos jugando o la partida ha terminado
let cartasUsadas = 0;
let totalJugador = 0;
let totalMaquina = 0;

//Generamos la baraja con 52 cartas de forma ordenada
function generarBaraja() { 
    for (let palo of palos) {
        for (let valor of valores) {
            baraja.push({ palo: palo, valor: valor });
        }
    }
}

// Barajamos las cartas de forma aleatoria
function barajar() {
    for (let i = 0; i < 100; i++) {
        let unaCarta = Math.floor(52 * Math.random());
        let otraCarta = Math.floor(52 * Math.random());
        let temp = baraja[unaCarta];
        baraja[unaCarta] = baraja[otraCarta];
        baraja[otraCarta] = temp;
    }
}

function blackjack() {
    jugada = true;
    generarBaraja();//LLlamamos a las funciones para crear la baraja y barajar las cartas
    barajar();
    console.log("El juego del Blackjack ha comenzado");

    let manoJugador = [baraja[0], baraja[1]];//repartimos las cartas del jugador y las guardamos en la variable "usadas"
    cartasUsadas = 2;
    totalJugador = puntuacion(manoJugador);
    console.log("Tus cartas son: " + manoJugador[0].valor + " de " + manoJugador[0].palo + " y " + manoJugador[1].valor + " de " + manoJugador[1].palo);
    console.log("Tu puntuación es: " + totalJugador);

    finalBlackjack();
    if (jugada) {//le pedimos al jugador si quiere otra carta
        if (totalJugador < 17) {
            console.log("¿Quieres una carta?");
        }
        while (totalJugador < 17) {
            manoJugador.push(baraja[cartasUsadas]);
            cartasUsadas++;
            totalJugador = puntuacion(manoJugador);
            console.log("Has recibido una carta: " + manoJugador[manoJugador.length - 1].valor + " de " + manoJugador[manoJugador.length - 1].palo);
            console.log("Tu nueva puntuación es: " + totalJugador);
        }
        if (totalJugador > 21) {
            console.log("Te has pasado de 21, has perdido");
            jugada = false;
        }
    }

    if (jugada) {//ahora es el turno de la máquina
        let manoMaquina = [baraja[cartasUsadas], baraja[cartasUsadas + 1]];
        cartasUsadas += 2;
        totalMaquina = puntuacion(manoMaquina);
        console.log("La máquina tiene: " + manoMaquina[0].valor + " de " + manoMaquina[0].palo + " y " + manoMaquina[1].valor + " de " + manoMaquina[1].palo);
        console.log("La puntuación de la máquina es: " + totalMaquina);

        while (totalMaquina < 17) {
            manoMaquina.push(baraja[cartasUsadas]);
            cartasUsadas++;
            totalMaquina = puntuacion(manoMaquina);
            console.log("La máquina ha pedido otra carta: " + manoMaquina[manoMaquina.length - 1].valor + " de " + manoMaquina[manoMaquina.length - 1].palo);
            console.log("La nueva puntuación de la máquina es: " + totalMaquina);
        }
        if (totalMaquina > 21) {
            console.log("La máquina tiene más de 21, has ganado");
        } else if (totalMaquina >= totalJugador) {
            console.log("La máquina ha ganado");
        } else {
            console.log("Has ganado");
        }
    }
}

function puntuacion(mano) {//añadimos valor y puntos a las cartas. El valor que nos devuelve es de tipo numero
    let puntos = 0;
    let ases = 0;
    for (let carta of mano) {
        if (typeof carta.valor === "number") {
            puntos += carta.valor;
        } else if (carta.valor === "Jota" || carta.valor === "Reina" || carta.valor === "Rey") {
            puntos += 10;
        } else if (carta.valor === "As") {
            puntos += 1;
            ases++;
        }
    }
    while (ases > 0 && puntos + 10 <= 21) {
        puntos += 10;
        ases--;
    }
    return puntos;
}

function finalBlackjack() {
    if (totalJugador === 21) {
        jugada = false;
        console.log("¡Blackjack! Has ganado");
    }
}

// Iniciar el juego
blackjack();