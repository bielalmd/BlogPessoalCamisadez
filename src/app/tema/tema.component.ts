import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Temas = new Temas();
  listaTemas: Temas[]

  

  constructor(private router: Router,
     private temasService: TemaService,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    if(environment.tipo != 'adm'){
      this.alertas.showAlertDanger('Acesso negado!! Você precisa ser Administrador para acessar o cadastro de temas!')
      this.router.navigate(['/inicio'])
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
      this.alertas.showAlertSuccess('Seu tema foi cadastrado !!')
      this.findAllTemas()
      this.tema = new Temas()
    })
  }

}
