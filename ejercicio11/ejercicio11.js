//Crea una función que reciba por pantalla un número indeterminado de parámetros. 
//Para aquellos que sean números, agrupalos en un array y píntalos por pantalla solo si son pares. 
//Prueba con diferentes entradas. 

function pares(...numeros){
    let numPares = [];
    for(let numero of numeros){
        if(typeof numero === 'number' && numero %2 ===0){
            numPares.push(numero);
        }

    }
    console.log(numPares);
}

pares(34,5,1,22,67);
pares(22, 98,100, 254, 74);