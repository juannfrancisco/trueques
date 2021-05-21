import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductosJsonServerService } from '../../services/productos-json-server.service';

@Component({
  selector: 'app-privado-productos',
  templateUrl: './privado-productos.component.html',
  styleUrls: ['./privado-productos.component.css']
})
export class PrivadoProductosComponent implements OnInit {

  productosNuevos:Producto[] = [];


  constructor( private servicio: ProductosJsonServerService ) { }

  ngOnInit(): void {

    this.servicio.obtenerTodosLosProductos().subscribe( productosServidor =>{
      this.productosNuevos = productosServidor;
    });

  }

}
