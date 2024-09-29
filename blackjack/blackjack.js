//Crea un programa que simule un juego de blackjack. Debes considerar las siguientes características:
//Cada carta se representa como un array de dos posiciones, en la primera posición se guarda el palo, 
// y en la segunda posicion el valor. Los palos son "corazónes", "picas", "tréboles" y "diamantes".. 
//Los valores de las cartas son 1, 2, 3, 4, 5, 6,7, 8, 9,10 (valores normales) y las figuras "Jota", Reina y Rey.
//Valores de las cartas: Las cartas naturales tienen su valor nominal excepto el 1 (el AS) que puede valer 1 u 11. 
//como desee el usuario. Las figuras valen 10. 
//En esta versión reducida el jugador, jugará contra la máquina. Hbará dos turnos: en el primero juega un jugador, 
//en el siguiente juega la máquina. Procedemos a describir los pasos:
//Se crea un array con todas las cartas posibles que tiene el juego (un array de dos dimensiones con 52 cartas).
//Turno del jugador: con un mennú, pide cartas (que salen aleatoriamente) hasta que considera que ya no quiere pedir más
//el objetivo del juego es llegar a 21 puntos o lo más cercano pero sin pasarse. Una vez termina de pedir cartas, se muestra su puntuación
//y comienza el turno de la máquina. 
//La máquina realiza la misma función pero automáticamente. Para pedir cartas cuando su puntuación sobrepasa a la del jugador. 
//En cuyo caso pueden ocurrir dos cosas: a) supera la puntuación del jugador y se pasa de 21 puntos. b) supera la puntuacion del jugador y tiene 21 puntos o menos. 


let palos = ["corazones", "picas", "tréboles", "diamantes"];
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
let baraja = [];

for (let i = 0; i < palos.length; i++) {
    for (let j = 0; j < valores.length; j++) {
        baraja.push([palos[i], valores[j]]);
    }
}

function barajar(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
}

// Función para calcular la puntuación de una mano
function calcularPuntuacion(mano) {
    let puntuacion = 0;
    let ases = 0;

    for (let carta of mano) {
        let valor = carta[1];
        if (valor === "Jota" || valor === "Reina" || valor === "Rey") {
            puntuacion += 10;
        } else if (valor === 1) {
            ases += 1;
            puntuacion += 11;
        } else {
            puntuacion += valor;
        }
    }
    while (puntuacion > 21 && ases > 0) {
        puntuacion -= 10;
        ases -= 1;
    }

    return puntuacion;
}

// Función para pedir una carta
function pedirCarta(baraja) {
    return baraja.pop();
}

// Turno del jugador
function turnoJugador() {
    let manoJugador = [];
    let continuar = true;

    while (continuar) {
        manoJugador.push(pedirCarta(baraja));
        let puntuacion = calcularPuntuacion(manoJugador);
        console.log(`Mano del jugador: ${JSON.stringify(manoJugador)}, Puntuación: ${puntuacion}`);

        if (puntuacion > 21) {
            console.log("Te has pasado de 21 puntos. Pierdes.");
            return puntuacion;
        }
    }
}

        // Turno de la máquina
function turnoMaquina(puntuacionJugador) {
    let manoMaquina = [];

    while (true) {
        manoMaquina.push(pedirCarta(baraja));
        let puntuacion = calcularPuntuacion(manoMaquina);
        console.log(`Mano de la máquina: ${JSON.stringify(manoMaquina)}, Puntuación: ${puntuacion}`);

        if (puntuacion > 21) {
            console.log("La máquina se ha pasado de 21 puntos. Ganas.");
            return puntuacion;
        }

        if (puntuacion > puntuacionJugador) {
            return puntuacion;
        }
    }
}

function jugarBlackjack() {
    barajar(baraja);
    let puntuacionJugador = turnoJugador();

    if (puntuacionJugador <= 21) {
        let puntuacionMaquina = turnoMaquina(puntuacionJugador);

        if (puntuacionMaquina <= 21) {
            if (puntuacionMaquina > puntuacionJugador) {
                console.log("La máquina gana.");
            } else {
                console.log("Ganas.");
            }
        }
    }
}

jugarBlackjack();
