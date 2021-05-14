import { Direccion } from './direccion';
export interface Producto {

    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    estado:string; // Nuevo / Usado
    tamanio:string;
    imagen:string;
    direccion?:Direccion;

}
