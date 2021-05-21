import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosJsonServerService } from '../../services/productos-json-server.service';

@Component({
  selector: 'app-privado-crear-producto',
  templateUrl: './privado-crear-producto.component.html',
  styleUrls: ['./privado-crear-producto.component.css']
})
export class PrivadoCrearProductoComponent implements OnInit {

  nombreProducto:string="";
  marca:string="";
  precio:number=0;
  imagen:string="";


  constructor( private servicio : ProductosJsonServerService ) { }

  ngOnInit(): void {
  }

  crearProducto(){
    let productoFormulario:Producto = {
      nombre: this.nombreProducto,
      marca:this.marca,
      precio : this.precio, 
      imagen: this.imagen
    }

    this.servicio.crearProducto( productoFormulario ).subscribe( data =>{
      console.log(data);
      alert("Se creo el Producto");
    } );

  }

}
