"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // Constructor
    constructor(nombre, cursos, apellidos) {
        this.ID = '2345';
        // Inicialziamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    get horasEstudidas() {
        let horas = 0;
        this.cursos.forEach((curso) => {
            horas += curso.horas;
        });
        return horas;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map