import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent {
  nombreUsuario!: string | null;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void { 
    this.getNombreUsuario();
  }

  getNombreUsuario(): void{
    //this.nombreUsuario = this.loginService.getNombreUsuario();
    console.log(this.loginService.getTokenDecoded());
    this.nombreUsuario = this.loginService.getTokenDecoded().sub;
  }
}
