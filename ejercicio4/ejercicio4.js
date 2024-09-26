//Crea una función que reciba 3 parámetros con valores por defecto (producto = "producto genérico", 
//precio = 100, impuestos = 21). La función convierte las entradas a cadena, entero y entero. 
//Si no se pudiese convertir las entradas devolverá los valores por defectos. Prueba esta función 
//varias veces, omitiendo valores y poniendo valores incorrectos. 

function convertirElemento(producto = "cacao", precio = 15, impuestos = 10){
    let prodString = String(producto);
    let precioInt = parseInt(precio);
    let impuestoInt = parseInt(impuestos);

    if(isNaN(precioInt)){
        precioInt = 100;
    }
    if(isNaN(impuestoInt)){
        impuestoInt = 10;
    }

    // alert(`Producto: ${prodString}`);
    // alert(`Precio: ${precioInt}`);
    // alert(`Impuestos: ${impuestoInt}`);
    console.log(`Producto: ${prodString} su precio es de ${precioInt} y el impuesto es de ${impuestoInt}`);
}

convertirElemento();

convertirElemento(producto = "Nintento Switch", precio = 400,impuestos = 21);