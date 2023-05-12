import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  private appUrl = 'https://localhost:7017/api/Usuario';
  
  saveUser(usuario: Usuario): Observable<any> {
    return this.http.post(this.appUrl, usuario)
  }
  changePassword(changePassword: any): Observable<any> {
    return this.http.put(this.appUrl + '/CambiarPassword', changePassword);
  }
}
