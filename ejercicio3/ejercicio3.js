//Crea una función a la cual se le pase un array. Esta función devolverá:
//a)Cuantos elementos hay de tipo número y los pintará por pantalla.
//b)Cuantos elementos hay de tipo cadena y los pintará por pantalla.
//c)Cuantos elementos no son ni numero ni cadena y los pintará por pantalla. 
//Prueba la ejecución con varias entradas.

let array =[1, 45, "New York", "Siracusa", 3, 67, "Hanoi"];

function tiposElemento(array){
    let num = 0;
    let string = 0;
    let otro = 0;
    array.forEach(element => {
        if(typeof element === 'number'){
            num++;
        } else if (typeof element === 'string'){
            string++;
        } else{
            otro++;
        }
    });{
      console.log(`Hay ${num} elementos de tipo número en el array`); //Utilizamos ${} y no ()
      console.log(`Hay ${string} elementos de tipo cadena en el array`);
      console.log(`Hay ${otro} elementos que no son ni números ni cadenas en el array`);
    }
     

}

tiposElemento(array);