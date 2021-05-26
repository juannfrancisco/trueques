import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-landing-registro-usuario',
  templateUrl: './landing-registro-usuario.component.html',
  styleUrls: ['./landing-registro-usuario.component.css']
})
export class LandingRegistroUsuarioComponent implements OnInit {

  nombre:string = "";
  correo:string =""
  password:string = "";
  repassword:string = "";
  edad:number = 0;



  constructor( private servicio:UsuariosService ) { }

  ngOnInit(): void {
  }

  registro(){

    if( this.password != this.repassword ){
      alert( "Las contraseñas no coinciden" );
    }else{

      let usuario:Usuario = {
        nombre: this.nombre,
        correo: this.correo, 
        password: this.password, 
        edad:this.edad
      }

      this.servicio.crearUsuario( usuario ).subscribe( respuesta =>{
        alert( "Se creo el usuario con exito" );
      });
      }
    }
  

}
