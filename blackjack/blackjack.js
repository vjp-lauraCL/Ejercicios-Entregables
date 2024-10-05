let palos = ["corazones", "picas", "tréboles", "diamantes"];
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
let baraja = [];
let jugada = false; //Comprueba si estamos jugando o la partida ha terminado
let cartasUsadas = 0;
let totalJugador=0;
let totalMaquina = 0;


//Barajamos la baraja de forma ordenada

function generarBaraja(){
   for(i = 1; i<=100;i++){
    let unaCarta = Math.floor(52*Math.random());
    let otraCarta = Math.floor(52*Math.random());
    let barajada={};
    barajada =baraja[unaCarta];
    baraja[unaCarta]=baraja[otraCarta];
    baraja[otraCarta]=barajada;
   }
   return baraja;
}
function blackjack(){
     jugada = true;
     generarBaraja();
     console.log("El juego del Blackjack");
     for(let i=0; i<52; i++){
        console.log(baraja[i]);
     }
     let manoJugador = baraja[0];
     manoJugador = baraja[1];
     let cartasUsadas = 2;
     console.log("Tus cartas son:" + manoJugador[0]+ " " + manoJugador[1]);
     finalBlackjack();
     if(jugada){
        if(totalJugador <17){
            console.log("¿Quieres una carta?");
        }
        while(totalJugador < 17){
            cartasUsadas++;
            manoJugador[cartasUsadas -1] = baraja[cartasUsadas -1];
            totalJugador=puntuar(manoJugador);
            //función final
        }
        if(totalJugador > 21){
            console.log("Te has pasado de 21, has perdido");
        }
     }
     if(jugada){
        let manoMaquina =0;
        console.log("Turno de la máquina");
        cartasUsadas+=1;
        manoMaquina[0]= baraja[cartasUsadas -1];
        cartasUsadas+=1;
        manoMaquina[1]= baraja[cartasUsadas -1];
        console.log("La máquina tiene: " + manoMaquina[0] + " " + manoMaquina[1]);

        if(totalMaquina < 17){
            while(totalMaquina < 17){
               console.log("La máquina ha pedido otra carta");
            }
        }else if(totalMaquina > 21){
            console.log("La máquina tiene más de 21, has ganado")
        }
     }
}
function puntuacion(mano){
    let valorCarta = 0;
    let puntosCarta = 0;
    let ases = false;
    for(let i =0; i<mano.length; i++){
        valorCarta =mano[i].valorCarta;
        if(valorCarta === "Jota" || valorCarta === "Reina" || valorCarta === "Rey"){
            puntosCarta = 10;
        }
        else if(valorCarta === "As"){
            puntosCarta = 1;
            ases = true;
}
    if(ases && puntosCarta + 10 <= 21){
        puntosCarta += 10;
    }
    return puntosCarta;
}
}

    function finalBlackjack(){
        if(totalJugador === 21){
            jugada = false;
            console.log("Has ganado");
        }
    }