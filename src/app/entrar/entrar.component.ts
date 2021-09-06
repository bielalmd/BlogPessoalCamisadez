import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe((resp: UsuarioLogin)=>{
      this.userLogin = resp

      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.token = this.userLogin.token


      console.log(environment)

      this.router.navigate(['/inicio'])

    }, erro =>{
      if(erro.status == 401){
        this.alertas.showAlertDanger('Usuario ou senha estão incorretos!')
      }
    })
  }
}

