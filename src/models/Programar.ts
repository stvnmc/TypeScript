import { ITarea, Nivel } from "./interfaces/ITarea";

export class Programar implements ITarea {
    titulo: string;
    descripcion: string;
    completada: boolean;
    urgencia?: Nivel | undefined;

    constructor(titulo: string, descripcion: string, completada: boolean, urgencia: Nivel) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;

        this.urgencia = urgencia;
    }

    resumen = () => {
        return `Tarea de Programacion: ${this.titulo} - ${this.urgencia}`
    }
}