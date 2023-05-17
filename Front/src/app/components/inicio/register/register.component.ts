import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  register!: FormGroup;
  loading = false;


 constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private toastr: ToastrService) {
  this.register = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ''
  }, { validator: this.checkPassword });
 }
 ngOnInit(): void {   
 }

 registrarUsuario(): void{

  const usuario: Usuario = {
    nombreUsuario: this.register?.value.usuario,
    password: this.register?.value.password,
  }
  
  this.loading = true;
  
  this.usuarioService.saveUser(usuario).subscribe(data => {
      this.toastr.success('El usuario' + usuario.nombreUsuario + 'se ha registrado con exito!', 'Usuario registrado');
      this.router.navigate(['/inicio/login']);
    }, error => {
      console.log(error);
      this.register.reset();
      this.toastr.error(error.error.message, 'Error');
    })
  this.loading = false;
 }

 checkPassword(group: FormGroup): any {
  const pass = group.controls['password'].value;
  const confirmPassword = group.controls['confirmPassword'].value;
  return pass === confirmPassword ? null : { notSame: true };
 }
}
