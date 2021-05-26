import { ProductosJsonServerService } from './../../services/productos-json-server.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privado-mis-productos',
  templateUrl: './privado-mis-productos.component.html',
  styleUrls: ['./privado-mis-productos.component.css']
})
export class PrivadoMisProductosComponent implements OnInit {

  productos:Producto[] = [];

  constructor( private servicio: ProductosJsonServerService ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.servicio.obtenerTodosLosProductos().subscribe( productosServidor =>{
      this.productos = productosServidor;
    });
  }

  eliminarProducto( producto:Producto ){
    this.servicio.eliminarProducto( producto ).subscribe( respuesta =>{
      alert( "Producto Eliminado" );
      this.cargarProductos();
    } );

    
  }

}
