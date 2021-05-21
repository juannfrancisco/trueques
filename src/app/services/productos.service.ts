import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[] = [
    { id:1, nombre:"Silla Of Gamer Kevin",descripcion:"Silla Gamer",precio:249990, estado:"Usado", tamanio:"Mediano 70cm",imagen:"https://falabella.scene7.com/is/image/Falabella/881999543_1?wid=1500&hei=1500&qlt=70"},
    { id:2,nombre:"Silla Gamer Cougar Armor One Black Pro Gaming",descripcion:"Silla Gamer",precio:249990, estado:"Nuevo", tamanio:"Mediano 70cm", imagen:"https://falabella.scene7.com/is/image/Falabella/15119092_1?wid=1500&hei=1500&qlt=70"},
    { id:3,nombre:"Smartphone Redmi Note 10 128GB",descripcion:"SmartPhone",precio:189990, estado:"Usado", tamanio:"6.4 pulgadas", imagen:"https://falabella.scene7.com/is/image/Falabella/15080968_1?wid=1500&hei=1500&qlt=70"},
    { id:4,nombre:"Air Force 1 07 High Zapatilla Urbana Hombre",descripcion:"Zapatilla Hombre",precio:99990, estado:"Nuevo", tamanio:"talla 45", imagen:"https://falabella.scene7.com/is/image/Falabella/15117218_1?wid=1500&hei=1500&qlt=70"},
  ];

  constructor() { }


  buscarProducto( id:number ):Producto|null{
    for( let p of this.productos ){
      if( id === p.id ){
        return p;
      }
    }
    return null;

  } 
}
