import { PrivadoMisProductosComponent } from './components/privado-mis-productos/privado-mis-productos.component';
import { PrivadoProductosComponent } from './components/privado-productos/privado-productos.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { LandingRecuperarContrasenaComponent } from './components/landing-recuperar-contrasena/landing-recuperar-contrasena.component';
import { LandingLoginComponent } from './components/landing-login/landing-login.component';
import { LandingRegistroUsuarioComponent } from './components/landing-registro-usuario/landing-registro-usuario.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivadoCrearProductoComponent } from './components/privado-crear-producto/privado-crear-producto.component';

const routes: Routes = [
  { path:"", component:LandingComponent },
  { path:"landing", component:LandingComponent, children:[
    {path:"", component:LandingHomeComponent},
    {path:"home", component:LandingHomeComponent},
    {path:"registro", component:LandingRegistroUsuarioComponent},
    {path:"login", component:LandingLoginComponent},
    {path:"recuperar-contrasena", component:LandingRecuperarContrasenaComponent},
  ] },
  { path:"privado", component:PrivadoComponent, children:[
    {path:"", component:PrivadoProductosComponent},
    {path:"productos", component:PrivadoProductosComponent},
    {path:"mis-productos", component:PrivadoMisProductosComponent},
    {path:"crear-producto", component:PrivadoCrearProductoComponent},
  ] },
  { path:"**", component:NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
