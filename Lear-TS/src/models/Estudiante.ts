import { get } from "http";
import { Curso } from "./curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?: string;
    cursos: Curso[]

    private ID: string = '2345';

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        // Inicialziamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }

    get horasEstudidas() {

        let horas = 0;

        this.cursos.forEach((curso: Curso) => {
            horas += curso.horas;
        })
        return horas;
    }

    set ID_Estudiante(id: string) {
        this.ID = id;
    }


}