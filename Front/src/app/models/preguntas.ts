import { Respuesta } from "./respuesta";

export class Pregunta {
  descripcion: string;
  listRespuestas: Respuesta[];
  hide?: boolean;

  constructor (description: string, listRespuestas: Respuesta[]) {
    this.descripcion = description;
    this.listRespuestas = listRespuestas;
  }
}
