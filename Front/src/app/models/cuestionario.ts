import { Pregunta } from "./preguntas";

export class Cuestionario {
  Nombre?: string;
  Descripcion?: string;
  FechaCreacion?: Date;
  listPreguntas?: Pregunta[];
  id?: number;

  constructor (nombre: string, description: string, fechaCreacion: Date, listPreguntas: Pregunta[]){
    this.Nombre = nombre;
    this.Descripcion = description;
    this.FechaCreacion = fechaCreacion;
    this.listPreguntas = listPreguntas;
  }

}

