import { type } from "os";
import { Curso } from "./models/curso";
import { Estudiante } from "./models/Estudiante";

import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Trabajador, Jefe } from "./models/Persona";
import { ITarea, Nivel } from "./models/interfaces/ITarea";
import { Programar } from "./models/Programar";
import { table } from "console";


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


// Funciones 

// Funcion que muestra un saludo por consola

function saludar() {
    let nombre = "Steven"

    console.log(`Hola, ${nombre} `)
}

// Invocacion de la funcion
saludar();

function saludarPersona(nombre: string) {
    console.log(`Hola, ${nombre} `)
}

const persona = "Steven"

saludarPersona(persona);


// Funcion que nuestra un saludo por consola a una persona 
// Nombre de la persona a saludar, por defecto sera "Pepe"

function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adios, ${nombre}`)
}

despedirPersona();// Adios, Pepe
despedirPersona("Alba"); // Adios, Alba


// nombre(Opcional) Nombre de la persona a despedir
function despedidaOpcional(nombre?: string | undefined) {
    if (nombre) {
        console.log(`Adios, ${nombre}`)
    } else {
        console.log(`Adios`)
    }
}

despedidaOpcional();// Adios, Pepe
despedidaOpcional("Alba"); // Adios, Alba

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} a;os`);
    } else {
        console.log(`${nombre}tiene ${edad} a;os`);
    }
}

variosParams("Martin")// Martin tiene 18 a:os
variosParams("Martin", "Caballero") // Martin Caballero tiene 18 a;os
variosParams("Martin", undefined, 30) // Martin tiene 18 a;ps
variosParams("Martin", "Caballero", 30) // Martin Caballero tiene 18 a;ps
variosParams("Martin", "Caballero", 30) // Martin Caballero tiene 18 a;ps
variosParams(nombre = "Martin", apellidos = "Caballero") // Martin Caballero tiene 18 a;ps


function ejemploVariosTipos(a: string | number) {
    if (typeof (a) === "string") {
        console.log("A es un string")
    } else if (typeof (a) === 'number') {
        console.log("A es un number")
    }
    else {
        console.log("A no es un string")
    }
}

ejemploVariosTipos('hola');
ejemploVariosTipos(3);


// nombre: Nombre de la persona
// apellidos: Apellidos de la persona
// returns: Nombre completo de la persona

function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Steven", "Marchena");

console.log(nombreCompleto)// Steven Marchena
console.log(ejemploReturn("Steven", "Marchena"))// Steven Marchena


// nombres es una lista de nombres de string
function ejemploMultipleParams(...nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploMultipleParams("Steven")
ejemploMultipleParams("Steven", "Pepe", "Maria")


const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);

function ejemploParaLista(nombres: string[]) {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploParaLista(lista);


// ARROW Functions

type Empleado = {
    nombre: string,
    apellido: string,
    edad: number
}

let empleadoSteven: Empleado = {
    nombre: "Steven",
    apellido: "Marchena",
    edad: 40
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} a;os`

// Llamamos a la funcion
mostrarEmpleado(empleadoSteven)

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 20) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`
    } else {
        return `Empleado ${empleado.nombre} esta en edad laboral`

    }
}

datosEmpleado(empleadoSteven)// Empleado Steven esta edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return
    } else {
        cobrar()// callback a ejecutarse     
    }
}



obtenerSalario(empleadoSteven, () => 'Cobrar');


// Async Functions

async function ejemploAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync().then((repuesta) => {
    console.log("Respuesta", repuesta);
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Todo ha terminado")


// Generadoras

function* ejemploGenerator() {

    // Yiel --> para emitir valores 
    let index = 0;

    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value)// 0
console.log(generadora.next().value)// 1
console.log(generadora.next().value)// 2
console.log(generadora.next().value)// 3


// Worked 

function* watcher(valor: number) {

    yield valor; // emitimos el valor inicial
    yield* worked(valor)// Llamamos a las emisiones del woker para emita valores
    yield valor + 4; // Emitimos el valor final + 4
}

function* worked(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value)// 0
console.log(generatorSaga.next().value)// 1 (lo ha hechi el watcher)
console.log(generatorSaga.next().value)// 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value)// 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value)// 4 (lo ha hecho el watcher)


// Sobrecarga de funciones

function mostrarError(error: string | number): void {
    console.log("Ha habido un error:", error)
}


// Persistencia de datos
// 1. LocalStorage --> Almacena los datos en le navegador (no se eliminan automaticamente)
// 2. SessionStorage --> La diferencia radica en la sesion de navegador. Es decir, los datos
// se persiten en la session de navegador
// 3. Cookies -> Tiene una fecha de caducidad y tambien tienen un ambito de URL


// LocalStorage y SessionStorege

function guardarlocalStorage(): void {
    localStorage.set("nombre", "Marchena");
    sessionStorage.set("nombre", "Marchema")
}

function leerLocalStorage(): void {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}

function borrarItem(item: string) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}

function borrarTodas(): void {
    localStorage.clear();
    sessionStorage.clear();
}



// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo: number) => void;

    public empezar(): void {

        setTimeout(() => {
            //Comprobamos que exista la funcion terminar como callback
            if (!this.terminar) return;

            // Cuando haya pasado el tiempo, se ejecutara la funcion terminar
            this.terminar(Date.now());
        }, 10000)
    }
}


const miTemporizador: Temporizador = new Temporizador();


// Definicmos la funcion del callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en:", tiempo)
}

// Lanzamos  el tempozador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la funcion terminar()

// setInterval(() => console.log("Tic"), 1000)// Imprimer "tic" cada segundo por consola

// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;


// Creamos un curso

// const cursoTS = new Curso("TpeScript", 15)
// const cursoJS = new Curso("JavaScript", 20)

// const listaCursos: Curso[] = [];

// listaCursos.push(cursoJS, cursoTS); // [Lista de cursos];

// Usamos el MOCK

const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un estudiante

const martin: Estudiante = new Estudiante("Steven", listaCursos, "Marchena")

console.log(`${martin.nombre} estudia:`)
martin.cursos.forEach((cursos: Curso) => {
    console.log(`-${cursos.nombre} (${cursos.horas} horas)`); // TypeScript (15 horas)
})

const cursoAngular: Curso = new Curso("Angular", 40);

martin.cursos.push(cursoAngular); // Agragamos

// Conocer las horas estudiadas

martin.horasEstudidas; // number

// Saber la instacia de un objeto/variable
// - TypeOf
// -InstanceOF

let fechaNacimiento = new Date(1991, 10, 10);

if (fechaNacimiento instanceof Date) {
    console.log("Es una instacia de Date")
}

if (martin instanceof Estudiante) {
    console.log("Martin es un Estudiante")
}


// Herecia y Polimorfismo

let empleado1 = new Trabajador("Steve", 'Marchena', 30, 2000)
let empleado2 = new Trabajador("Pepe", 'farcia', 32, 1000)
let empleado3 = new Trabajador("Juan", 'Gonzales', 50, 3000)


// empleado1.saludar();// herencia de persona

let jefe = new Jefe("Pablo", "Garcia", 50);

jefe.trabajador.push(empleado1, empleado2, empleado3);

jefe.trabajador.forEach((trabajador: Trabajador) => {
    console.log(trabajador)
})


empleado1.saludar(); //especificado en Trabajador
jefe.saludar(); // Herencia de Persona


// Uso de interfaces

let programar: ITarea = {
    titulo: 'Programar en TypeScript',
    descripcion: 'Practicar con Katas para aprender a desarrollar con TS',
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function (): string {
        return `${this.titulo} - ${this.completada} - Nivel:${this.urgencia}`
    }
}

console.log(programar.resumen())


// Tarea  de Programcion (implementar ITarea)

let programarTS = new Programar("TypeScript", "Tarea de programcion en TS", false, Nivel.Bloqueante);

console.log(programarTS.resumen())


// Decoradores experimentales --> @
// - Clases
// - Parametros
// - Metodos
// - Propiedades


// function Override(label: string) {
//     return function (target: any, key: string) {
//         Object.defineProperty(target, key ,{
//             configurable: false,
//             get: () => label
//         })
//     }
// }

// class PruebaDecorador {
//     @Override('Prueba')// llamr la funcion Override
//     nombre: string = "Martion"
// }

// let prueba = new PruebaDecorador();
// console.log(prueba.nombre) // "Prueba" siempre va a ser devuelto a traves de get()


// // Otra funcion para usarla como decorador
// function SoloLectura(target: any, key: string) {
//     Object.defineProperty(table, key, {
//         writable: false
//     })
// }

// class PruebaSoloLectura {
//     @SoloLectura
//     nombre: string = ''
// }

// let pruebaLectura = new PruebaSoloLectura();
// pruebaLectura.nombre = "Martin";

// console.log(pruebaLectura.nombre)// => Undefined, ya que no se le puede dar valor (es solo de lectura )



// // Decorador para parametros de un metodo
// function mostrarPosicion(target: any, propertyKey: string, parameterIndex: number) {
//     console.log("Posicion", parameterIndex);
// }

// class PruebaMetodoDecorador {
//     prueba(a: string, @mostrarPosicion b: boolean) {
//         console.log(b)
//     }
// }

// // Usamos el metodo con el parametro y su decorador

// new PruebaMetodoDecorador().prueba('hola', false)