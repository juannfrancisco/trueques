import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-login',
  templateUrl: './landing-login.component.html',
  styleUrls: ['./landing-login.component.css']
})
export class LandingLoginComponent implements OnInit {

  correo:string = "";
  password:string = "";


  constructor( private servicio:UsuariosService ) { }

  ngOnInit(): void {
  }

  login(){

    this.servicio.login( this.correo, this.password ).subscribe( usuarios =>{
      debugger;
      
      if( usuarios.length > 0 ){
        alert( "Login correcto" );
      }else{
        alert("Los datos ingresados no son correctos");
      }

    });


    //servidor
    // router link --> privada 
  }

}
