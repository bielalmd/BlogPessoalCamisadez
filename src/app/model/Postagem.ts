
import { Temas } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public data: Date
    public texto: string
    public titulo: string
    public usuario: Usuario //varias postagens pode ter um dono ou seja não use [] aqui
    public tema: Temas
}