import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { NuevoCuestionariosComponent } from './components/dashboard/cuestionarios/nuevo-cuestionarios/nuevo-cuestionarios.component';
import { PasoDosComponent } from './components/dashboard/cuestionarios/nuevo-cuestionarios/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './components/dashboard/cuestionarios/nuevo-cuestionarios/paso-uno/paso-uno.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent, children: [
    { path: '', component: BienvenidaComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: CuestionariosComponent },
    { path: 'cambiarPassword', component: CambiarPasswordComponent},
    { path: 'nuevoCuestionario', component: NuevoCuestionariosComponent, children: [
      { path: 'pasoUno', component: PasoUnoComponent},
      { path: 'pasoDos', component: PasoDosComponent},
    ]}
  ]},
  { path: '**', redirectTo: '/bienvenidos', pathMatch: 'full'}, //siempre al ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
