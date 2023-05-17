import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasoDosComponent } from '../paso-dos/paso-dos.component';
import { Route, Router } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.component.html',
  styleUrls: ['./paso-uno.component.css']
})
export class PasoUnoComponent {
datosCuestionario!: FormGroup;

constructor(private fb: FormBuilder, private router: Router, private cuestionarioServicio: CuestionarioService){
  this.datosCuestionario = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required]
  });
}

pasoUno(): void {
  this.cuestionarioServicio.tituloCuestionario = this.datosCuestionario.value.titulo;
  this.cuestionarioServicio.descripcionCuestionario = this.datosCuestionario.value.descripcion;
  this.router.navigate(['./dashboard/nuevoCuestionario/pasoDos'])
}

}
