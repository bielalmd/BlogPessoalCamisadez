import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Temas = new Temas()
  idTemas: number

  constructor(
 private temaService: TemaService,
 private router: Router,
 private route: ActivatedRoute,
 private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idTemas = this.route.snapshot.params['id']
    this.findByidTemasDel(this.idTemas)

  }

  findByidTemasDel(id: number){
    this.temaService.getTemaById(id).subscribe((resp: Temas) => {
      this.tema = resp
    })

  }

  apagar(){
    this.temaService.deleteTema(this.idTemas).subscribe(() => {
      this.alertas.showAlertSuccess('Tema apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }

}
