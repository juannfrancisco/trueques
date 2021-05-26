import { Usuario } from './../../models/usuario';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];

  constructor( private service:UsuariosService ) { }

  ngOnInit(): void {
    this.service.obtenerUsuarios().subscribe( usuariosServidor =>{
      this.usuarios = usuariosServidor;
    });
  }

}
