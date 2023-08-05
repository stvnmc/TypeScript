console.log('hola martin');
console.log('hola martin ');
console.log('hola martin ');

// Esto es un comentarios

/*
 *Esto es un comentario
 *Multilinea
*/


//Declaracion de Variables:

var nombre: string = "Steven"
let email: string = "stvnmc123@gmail.com"; //Variable de ambito local

console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`Como han ido las vacaiones, ${nombre} ?`);

console.log(`El Email de ${nombre} es ${email}`);

const PI: number = 3.32;

var apellidos: any = "Marchena Caballero"; //Tipo any hace que la variable pueda cambiar
apellidos = 3;

var error: boolean;
error = false;

console.log(`Hay error?: ${error}`);


//Instaciacion multiple de variables

let a: string, b: boolean, c: number; // Intancia 3 variables sin valor inicial

a = "TypeScript";
b = true;
c = 9.3;

//BuiltIn Types: number, string, boolean, void, null y undefined

//Tipos mas complejos

//Combinacion de tipos en lista
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

// Combinar de tipos de lista 
let valores: (string | number | boolean)[] = [false, "hola", true, 45]

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);


//Asignacion multiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

//Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;


// Factor Spread(Propagacion)
//Declaracion con factor de propagacion
let { titulo, estado, urgencia } = miTarea;

// Lista
let listaCompraLunes: string[] = ["lechee", "patata"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevo"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraMartes, ...listaCompraMiercoles]

// En Objetos

let estadoApp = {
    usuario: "amdin",
    session: 3,
    jwt: "Bearer1234546"
}

// Cambiar un valor por propagacion
let nuevoEstado = {
    ...estadoApp,
    session: 4 
}


//Types de TypesScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}

//Condicinales

//Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.precio} es viejo` : `Coche: ${coche.precio} es nuevo`);


//If - else if - else
if (error) {
    console.log("Hay un error")
} else {
    console.log("No hay un error")
}

//If - else if- else

if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`)
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`)
} else {
    `Coche: ${coche.nombre} es nuevo`
}


// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no esta completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente de completada");
        break;
    default:
        break;
}

// Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: 'Tarea 1',
        estado: Estados.Pendiente,
        urgencia: 2
    },
    {
        nombre: 'Tarea 2',
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: 'Tarea 3',
        estado: Estados.Completado,
        urgencia: 24
    }
]

// ForEach
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
});

// For clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// Bucles While

while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia === 5) {
        tarea1.estado = Estados.Completado
        break;
    } else {
        tarea1.urgencia++;
    }
}

//DO while (se ejecuta al menos una vez)
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado
} while (tarea1.estado !== Estados.Completado);

