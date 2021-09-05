import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Temas = new Temas();
  listaTemas: Temas[]

  constructor(private router: Router, private temasService: TemaService) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()

  }
  findAllTemas(){
    this.temasService.getAllTemas().subscribe((resp: Temas[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrarTemas(){
    this.temasService.postTema(this.tema).subscribe((resp: Temas) => {
      this.tema = resp
      alert('Seu tema foi cadastrado !!')
      this.findAllTemas()
      this.tema = new Temas()
    })
  }

}
