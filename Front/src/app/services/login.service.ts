import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  private appUrl = 'https://localhost:7017/api/Login';

  login(usuario: Usuario): Observable<any> {
    return this.http.post(this.appUrl, usuario);
  }

  setLocalStorage(data: string): void {
    localStorage.setItem('token', data);
  }

  // getNombreUsuario(): string | null {
  //   return localStorage.getItem('nombreUsuario');
  // }


  getTokenDecoded(): any {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken;
    } else {
      console.log('No se encontró el token en el localStorage');
    }
  }
  
  removeLocalStorge() {
    localStorage.removeItem('token');
  }
}
