//Crea una función que dado un array lo ordene (mira funciones predefinidas). Intenta hacer un método 
//para ordenarlo por tí mismo  considerando que el array siempre incluyese números(Es decir, sin utilizar .sort()). 

let array = [1, 4, 6, 9, 23];

function ordenarArray(array){
    let aux;
    for(let i = 0; i< array.lenght; i++){
        for(let j = 0; j< array.lenght; j++){
        }
        if(array[j]>array[j+1]){
            aux = array[j];
            array[j]= array[j+1];
            array[j+1]= aux;
        }
            
        }
        return array;

    }
console.log(ordenarArray(array));
