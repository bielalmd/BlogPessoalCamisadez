import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  temas: Temas = new Temas()

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTemas(id)
  }

findByIdTemas(id: number){
  this.temaService.getTemaById(id).subscribe((resp: Temas) => {
    this.temas = resp
  })
}

atualizar(){
  this.temaService.putTema(this.temas).subscribe((resp: Temas) =>{
    this.temas = resp
    alert('tema atualizado com sucesso')
    this.router.navigate(['/tema'])
  })
}

}
