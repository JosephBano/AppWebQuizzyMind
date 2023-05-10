import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  private linkURL = 'https://localhost:7017/api/Usuario/CrearUsuario';
  
  SaveUser(usuario: Usuario): Observable<any> {
    return this.http.post(this.linkURL, usuario);
  }
}
