import { ActivatedRoute } from '@angular/router';
import { ProductosJsonServerService } from './../../services/productos-json-server.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privado-editar-producto',
  templateUrl: './privado-editar-producto.component.html',
  styleUrls: ['./privado-editar-producto.component.css']
})
export class PrivadoEditarProductoComponent implements OnInit {

  producto:Producto|null = null;

  constructor( 
    private servicio:ProductosJsonServerService, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => {
      let identificador:string =  parametros["idProducto"];
      this.obtenerProductoPorId( +identificador ); 
    } );
  }


  obtenerProductoPorId( id:number ){
    this.servicio.buscarProducto( id ).subscribe( productoServidor =>{
      this.producto = productoServidor;
    });
  }

  editarProducto(){
    if( this.producto ){
      
      this.servicio.editarProducto( this.producto ).subscribe( productoServidor =>{
        alert( "Producto Modificado!" );
      });

    }
  

    
  }

}
