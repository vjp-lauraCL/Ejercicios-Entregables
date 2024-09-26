//Crea un array con cuatro valores y realiza los siguientes pasos:
//1)Añade dos elementos al inicio

let array = [33, 56, 234, 11, 13];
array.unshift(23, 55);
console.log(array);

//2)Añade tres elementos al final
let array2 =[22, 66, 1];
let array3 = array.concat(array2);
console.log(array3);

//3)Elimina la posicion 3, 4 y 5.
var index = 3;
array3.splice(index, 3);
console.log(array3);

//4)Inserta dos elementos antes del último elemento
let index2= array3.lenght -1;
array3.splice(index, 0, 99, 897);
console.log(array3);