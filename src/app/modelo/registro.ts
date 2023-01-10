import { Listado } from "./listado";

export interface Regestrarse{
    username:string;
    password:string;
    pais: Listado;
    ofertas: boolean;
}