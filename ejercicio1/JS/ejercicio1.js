//Crea una funcion que reciba dos cadenas y pinte cual es la más corta de las dos.
//Si alguno de los dos argumentos no es una cadena devuelveu un mensaje de error en su lugar. 
//Probarlo con varias entradas directamente introducidas con código. Las salidas se harán con console.log
let cadena1 = "gato es un animal salvaje";
let cadena2 = "mañana es jueves";

function compararCadenas(cadena1, cadena2) {
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.log("Error, no es una cadena");
        return;
    }

    if (cadena1.length < cadena2.length) {
        console.log(cadena1);
    } else if (cadena2.length < cadena1.length) {
        console.log(cadena2);
    } else {
        console.log("Ambas cadenas tienen la misma longitud");
    }
}
compararCadenas(cadena1, cadena2);
