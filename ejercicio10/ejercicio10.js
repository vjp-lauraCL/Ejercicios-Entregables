//Crea una función en la que pueda entrar un número indeterminado de argumentos. Comprueba que todos
//son cadennas (si no devuelve un error) y pinta por pantalla la suma total de todas las longitudes
//de las cadenas. Utiliza rest y reduce. Prueba con varias entradas. 

//Creamos la función que recibe un número indeterminado de argumentos.
function sumaVariables(...cadenas){
    for(let cadena of cadenas){
        if(typeof cadena !== 'string'){
            alert('Error: no es una cadena');
        }
    }
    //Utilizamos reduce para sumar las longitudes de las cadenas.
    let suma = cadenas.reduce((resultado, cadena)=> resultado + cadena.length, 0);
    console.log(suma);

}

sumaVariables('Super Mario Bros', 'Final Fnatasy', 'Kirby', 'Zelda', 'Pacman', 'Demon Souls');
sumaVariables(23, 'oso', 'ciudad', 66);
