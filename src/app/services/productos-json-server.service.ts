import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosJsonServerService {

  constructor( private http: HttpClient ) { }


  obtenerTodosLosProductos(){
    return this.http.get<Producto[]>( "http://localhost:3000/productos" );
  }


  buscarProducto( id:number ){
    return this.http.get<Producto>( "http://localhost:3000/productos/"+ id )
  }

  crearProducto( producto:Producto ){
    return this.http.post( "http://localhost:3000/productos", producto );
  }

  editarProducto( producto:Producto ){
    return this.http.put( "http://localhost:3000/productos/"+ producto.id, producto );
  }

  eliminarProducto( producto:Producto ){
    return this.http.delete( "http://localhost:3000/productos/" + producto.id );
  }

}
