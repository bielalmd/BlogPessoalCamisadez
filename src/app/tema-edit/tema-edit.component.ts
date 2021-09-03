import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
  }

}
