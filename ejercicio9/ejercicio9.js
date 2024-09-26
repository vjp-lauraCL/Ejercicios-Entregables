//Crea un programa en el quer existan 3 objetos de tipo platoCocina, que tengan los atributos
//nombrePlato (cadena), duracion(numero), y dificultad(un número). 
//Almacena en un mapa la relacion de cada plato con un array que guarde los ingredientesque se utilizan en la cadena. 
//Crea una función que pinte el mapa (platos->ingredientes):

//Creamos la clase PlatoCocina que almacenará el nombre del plato, la duración y la dificultad. 
class PlatoCocina{
    constructor(nombrePlato, duracion, dificultad){
        this.nombrePlato = nombrePlato;
        this.duracion = duracion;
        this.dificultad = dificultad;
    }
}

//Creamos los tres platos de la clase PlatoCocina. 
let plato1 = new PlatoCocina('Pollo al curry', 30, 3);
let plato2 = new PlatoCocina('Pescado con verduras', 20, 4);
let plato3 = new PlatoCocina('Huevo frito con patatas', 30, 2);
