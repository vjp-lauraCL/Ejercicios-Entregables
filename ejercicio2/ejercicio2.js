//Crea una funcion que reciba dos cadenas. Comprobará que ambos argumentos son cadenas y en caso 
//afirmativo pintará mediante console.log si una cadena es igual a otra o al reves. prueba con varias entradas

let cadena1 = "Super Mario Bros";
let cadena2 = "Pacman";

function compararCadenas(cadena1, cadena2) {
    if (typeof cadena1 === 'string' && typeof cadena2 === 'string') {
        if (cadena1 === cadena2) {
            console.log('Las cadenas son iguales.');
        } else {
            console.log('Las cadenas no son iguales.');
        }
    } else {
        console.log('Ambos argumentos deben ser cadenas.');
    }
}

 compararCadenas(cadena1, cadena2);