import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/preguntas';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Cuestionario } from '../../../../../models/cuestionario';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {

  tituloCuestionario?: string;
  descripcionCuestionario?: string;
  listPreguntas: Pregunta[] = [];
  mostrarCardBodyArray: boolean[] = [];

  constructor(private cuestionarioService: CuestionarioService, private router: Router, private toastr: ToastrService){

  }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

  guardarPregunta(pregunta: Pregunta) {
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
    
  }

  eliminarPregunta(index: number) {
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario(){
    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      listPreguntas: this.listPreguntas,
    };
    console.log(cuestionario);
    
    //Enviamos cuestionario al Back
    this.cuestionarioService.guardarCuestionario(cuestionario).subscribe(data => {
      this.toastr.success('El cuestionario fues registrado con exito', 'Cuestionario Registrado!');
      this.router.navigate(['/dashboard']);
    }, error => {
      this.toastr.error('Opss... Ocurrio un error', 'Error')
      this.router.navigate(['/dashboard']);
    })
  }
}
