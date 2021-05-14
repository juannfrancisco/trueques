import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { LandingRegistroUsuarioComponent } from './components/landing-registro-usuario/landing-registro-usuario.component';
import { LandingLoginComponent } from './components/landing-login/landing-login.component';
import { LandingRecuperarContrasenaComponent } from './components/landing-recuperar-contrasena/landing-recuperar-contrasena.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { PrivadoSideBarComponent } from './components/privado-side-bar/privado-side-bar.component';
import { PrivadoMisProductosComponent } from './components/privado-mis-productos/privado-mis-productos.component';
import { PrivadoProductosComponent } from './components/privado-productos/privado-productos.component';
import { PrivadoCrearProductoComponent } from './components/privado-crear-producto/privado-crear-producto.component';
import { PrivadoPerfilProductoComponent } from './components/privado-perfil-producto/privado-perfil-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NoEncontradoComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingHomeComponent,
    LandingRegistroUsuarioComponent,
    LandingLoginComponent,
    LandingRecuperarContrasenaComponent,
    PrivadoComponent,
    PrivadoSideBarComponent,
    PrivadoMisProductosComponent,
    PrivadoProductosComponent,
    PrivadoCrearProductoComponent,
    PrivadoPerfilProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
