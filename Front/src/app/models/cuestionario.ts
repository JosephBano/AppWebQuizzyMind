import { Pregunta } from "./preguntas";

export class Cuestionario {
  nombre?: string;
  descripcion?: string;
  fechaCreacion?: Date;
  listPreguntas: Pregunta[];
  id?: number;

  constructor (nombre: string, description: string, fechaCreacion: Date, listPreguntas: Pregunta[]){
    this.nombre = nombre;
    this.descripcion = description;
    this.fechaCreacion = fechaCreacion;
    this.listPreguntas = listPreguntas
  }

}

