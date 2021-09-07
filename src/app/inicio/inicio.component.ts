import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Temas } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string


  tema: Temas = new Temas()
  listaTemas: Temas[]
  idTema: number
  nomeTema: string

  
  usuario: Usuario = new Usuario()
  idUser = environment.id

  key = 'data'
  reverse = true
  
  

  constructor(
    private temaService: TemaService,
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alertas: AlertasService
    
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    
    this.findAllTemas()
    this.getAllPostagens()
  }
  

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Temas[]) =>{
      this.listaTemas = resp
    })
  }
  findTemaById(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Temas) =>{
      this.tema = resp
    })
  }
  findByIdUser(){
    this.authService.getUserById(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })

    }

    publicar(){
      this.tema.id = this.idTema
      this.postagem.tema = this.tema

      this.usuario.id = this.idUser
      this.postagem.usuario = this.usuario

      
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
        this.postagem = resp
        this.alertas.showAlertSuccess('Postagem realizada com sucesso')
        this.postagem = new Postagem() 
        this.getAllPostagens()
      })

    }
    findByTituloPostagem(){

      if(this.tituloPost == ''){
        this.getAllPostagens()
      }else{
        this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp
        })
        
      }
      
    }
    findBynomeTema(){
      if(this.nomeTema == ''){
        this.findAllTemas()
      } else{
        this.temaService.getByDescricao(this.nomeTema).subscribe((resp: Temas[]) => {
          this.listaTemas = resp
        })
      }
    }
      

  }
