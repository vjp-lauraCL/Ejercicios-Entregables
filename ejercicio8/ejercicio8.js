//Crea una funcion procesarArray que realice los siguientes pasos:
//1)Checkea que todos los elementos son de tipo número. Si no, termina con alert ("Error")
let array =["hola", 55, 20, 66, 9];
function procesarArray(array){
    let resultado = array.every(element => typeof element === 'number');
    if(!resultado){
        alert("Error");
        return;
    }

}
procesarArray(array);

//En caso afirmativo, modifica el valor del array multiplicando cada elemento por 2
//se debe almacenar sobre el mismo array

