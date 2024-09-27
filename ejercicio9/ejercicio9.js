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
    toString(){
        return `${this.nombrePlato} ${this.duracion} ${this.dificultad}`;
    }
}

//Creamos los tres platos de la clase PlatoCocina. 
let plato1 = new PlatoCocina('Pollo al curry', 30, 3);
let plato2 = new PlatoCocina('Pescado con verduras', 20, 4);
let plato3 = new PlatoCocina('Huevo frito con patatas', 30, 2);

//Creamos un mapa que almacenará los platos y los ingredientes de cada plato.
let platos = new Map();
platos.set(plato1, ['pollo', 'curry', 'arroz']);
platos.set(plato2, ['pescado', 'zanahoria', 'cebolla', 'patatas']);
platos.set(plato3, ['huevos', 'patatas']);

//Creamos la función que pintará el mapa (platos-> ingredientes)
//Utilizamos join para unir todos los elementos del array de ingredientes
function pintarMapa() {
    for (let [plato, ingredientes] of platos) {
        console.log(`${plato.nombrePlato} -> ${ingredientes.join(', ')}`);
    }
}

pintarMapa();