import { ProductosJsonServerService } from './../../services/productos-json-server.service';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-privado-perfil-producto',
  templateUrl: './privado-perfil-producto.component.html',
  styleUrls: ['./privado-perfil-producto.component.css']
})
export class PrivadoPerfilProductoComponent implements OnInit {

  producto:Producto | null = { id:1,nombre:"Silla Of Gamer Kevin",descripcion:"Silla Gamer",precio:249990, estado:"Usado", tamanio:"Mediano 70cm",imagen:"https://falabella.scene7.com/is/image/Falabella/881999543_1?wid=1500&hei=1500&qlt=70"};

  constructor( 
    private servicio: ProductosJsonServerService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => {
      let identificador:string =  parametros["idProducto"];

      this.servicio.buscarProducto( +identificador ).subscribe( productoServidor =>{
        this.producto = productoServidor;
      });
    } );

    

  }

}
