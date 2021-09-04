import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Temas } from '../model/Tema';
import { Usuario } from '../model/Usuario';
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


  tema: Temas = new Temas()
  listaTemas: Temas[]


  usuario: Usuario = new Usuario()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private postageService: PostagemService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      /* alert('Sua sessão expirou, faça o Login novamente...') */
      this.router.navigate(['/entrar'])
    }
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Temas[]) =>{
      this.listaTemas = resp
    });

  }
  findTemaById(id:number){
    this.temaService.getTemaById(id).subscribe((resp: Temas) =>{

    });
  }
  findByIdUser(){
    this.authService.getUserById(this.idUser).subscribe
  }
}
