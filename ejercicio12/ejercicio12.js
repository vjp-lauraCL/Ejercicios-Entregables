//Crea un mapa que guarde Estudiantes (cadena con el nombre)-->[notas de las asignaturas]
//(un array de 6 posiciones con números). Al menos cuatro estudiantes (3 funciones). 
//a)Pintar por pantalla el nombre de cada estudiante con su media académica. Crea la funcion mediaAritmetica
//que tenga como entrada enteros con cualquier número de elementos. 
//b)Pinta al final quien es el estudiante con mejor media y cual es esa media. 
//c)Pinta los nomnbres de todos los estudiantes ordenados por su media. 

class Estudiantes{
    constructor(nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }

}

let estudiante1 = new Estudiantes('Paola', [5, 7, 8, 4, 6,6]);
let estudiante2 = new Estudiantes('Luis',  [6, 7, 8, 4, 6,9]);
let estudiante3 = new Estudiantes('Ángel', [9, 7, 8, 3, 2, 5]);
let estudiante4 = new Estudiantes ('Sara', [8, 7, 9, 5, 8, 8]);

let estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4];

function mediaAritmetica(notas){
    let sumaNotas = 0;
    for(let i = 0; i<notas.length; i++){
        sumaNotas += notas[i];
    }
    return sumaNotas/notas.length;
}

function mejorMedia(estudiantes){
    let mejorMedia = 0;
    let mejorEstudiante = '';
    for(let i = 0; i<estudiantes.length; i++){
        let media = mediaAritmetica(estudiantes[i].notas);
        if(media > mejorMedia){
            mejorMedia = media;
            mejorEstudiante = estudiantes[i].nombre;
         }

    }
    return mejorEstudiante;
}

function ordenarEstudiantes(estudiantes){
    let estudiantesOrdenados = estudiantes.sort((a,b) => {
        return mediaAritmetica(b.notas) - mediaAritmetica(a.notas);
    }
    );
    return estudiantesOrdenados;
}

function pintarEstudiantes(estudiantes) {
    let estudiantesOrdenados = ordenarEstudiantes(estudiantes);
    estudiantesOrdenados.forEach(estudiante => {
        console.log(`${estudiante.nombre} ${mediaAritmetica(estudiante.notas)}`);
    });
    let mejorEstudiante = mejorMedia(estudiantes);
    let mejorEstudianteNotas = estudiantes.find(e => e.nombre === mejorEstudiante).notas;
    console.log(`El estudiante con mejor media es ${mejorEstudiante} con una media de ${mediaAritmetica(mejorEstudianteNotas)}`);
}

pintarEstudiantes(estudiantes);

