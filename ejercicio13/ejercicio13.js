//Crea una función que dada un array, elimine sus repetidos y los pinte por pantalla qué elementos estaban repetidos

let array = [ 44,6,2,789,54,11, 44, 6, 789];

function eliminarRepetidos(array) {
    let elementosEliminados = [];
    let resultado = array.filter((item, index) => {
        if (array.indexOf(item) !== index) {
            elementosEliminados.push(item);
            return false;
        }else{
            return true;
        }
      
    });

    console.log("Los elementos eliminados del array son :", elementosEliminados);
    return resultado;
}

console.log(eliminarRepetidos(array));