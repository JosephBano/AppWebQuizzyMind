import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Pregunta } from '../../../../../../models/preguntas';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  nuevaPregunta!: FormGroup;
  pregunta?: Pregunta;
  rtaCorrecta = 0;

  @Output() enviarPregunta = new EventEmitter<Pregunta>();
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.nuevaPregunta = this.fb.group({
      titulo: ['', Validators.required],
      respuestas: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.agregarRespuesta();
    this.agregarRespuesta();
  }

  // Devuelve form array de respuestas
  get getRespuestas() {
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  // Agregar respuesta al array
  agregarRespuesta(): void {
    this.getRespuestas.push(this.fb.group({
      descripcion: ['', Validators.required],
      esCorrecta: 0,
    }));
  }

  eliminarRespuesta(index: number) {
    if(this.getRespuestas.length === 2){
      this.toastr.error("Como minimo la pregunta debe contener 2 respuestas", 'Error!')
    } 
    else {
      this.getRespuestas.removeAt(index);
    }
  }

  setRespuestaValida(index: number) {
    this.rtaCorrecta = index;
  }

  agregarPregunta() {
    //Obtener titulo pregunta
    const descripcionPregunta = this.nuevaPregunta.get('titulo')?.value;

    //Obtener array de respuestas
    const arrayRespuestas = this.nuevaPregunta.get('respuestas')?.value;

    //creamos arr respuetas
    const arrayRta: Respuesta[] = [];

    arrayRespuestas.forEach((e: any, index: number) => {
      const respuesta: Respuesta = new Respuesta(e.descripcion, false);
      if(index === this.rtaCorrecta){
        respuesta.esCorrecta = true
      }      
      arrayRta.push(respuesta);
    });

    const pregunta: Pregunta = new Pregunta(descripcionPregunta, arrayRta);

    this.enviarPregunta.emit(pregunta);

    this.reset();
  }

  reset() {
    this.rtaCorrecta = 0;
    this.nuevaPregunta.reset();
    this.getRespuestas.clear();
    this.agregarRespuesta();
    this.agregarRespuesta();
  }

}

