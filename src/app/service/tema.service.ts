import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  /* entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogcamisadez.herokuapp.com/usuarios/logar', UsuarioLogin)
      } */

  postTema(temaCadastro: Temas): Observable<Temas> { // sempre observar seu swagger e conferir a sintaxe do seu códgio para não ter falhas
    return this.http.post<Temas>('https://blogcamisadez.herokuapp.com/temas', temaCadastro, this.token)
    
  }

}


