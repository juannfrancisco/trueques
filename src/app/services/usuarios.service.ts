import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http:HttpClient ) { }

  obtenerUsuarios(){
    return this.http.get<Usuario[]>( "http://localhost:3000/usuarios" );
  }


  crearUsuario( usuario:Usuario ){
    return this.http.post<Usuario>( "http://localhost:3000/usuarios", usuario );
  }

  login( correo:string, password:string ){
    //http://localhost:3000/usuarios?correo=juan@gmail.com&password=1234
    return this.http.get<Usuario[]>( "http://localhost:3000/usuarios?correo="+ correo + "&password="+ password );
  }

}
