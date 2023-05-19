import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  constructor( private http: HttpClient) { }

  private appUrl = 'https://localhost:7017/api/Cuestionario';
  
  tituloCuestionario?: string;
  descripcionCuestionario?: string;

  guardarCuestionario(cuestionario: Cuestionario): Observable<any>{
    return this.http.post(this.appUrl, cuestionario);
  }

}
