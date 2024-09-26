//Crea una funcion procesarArray que realice los siguientes pasos:
//1)Checkea que todos los elementos son de tipo número. Si no, termina con alert ("Error")
//En caso afirmativo, modifica el valor del array multiplicando cada elemento por 2
//se debe almacenar sobre el mismo array
//Por ultimo comprueba que todos los elementos son pares. Si es así, muestra un mensaje por pantalla
//de éxito, en caso contrario de error
let array =[2, 58, 20, 66, 94];

function procesarArray(array){
    let error = false;
    for(let i = 0; i<array.length; i++){
        if(typeof array[i] != 'number'){
            alert('Error');
           return;
        }
    }
    for(let i = 0; i<array.length; i++){
        array[i] *=2;
    }
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 != 0){
            alert('Error');
            return;
        }
    }

    alert('Éxito');
}

procesarArray(array);


