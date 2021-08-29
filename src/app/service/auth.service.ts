import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
return this.http.post<UsuarioLogin>('https://blogcamisadez.herokuapp.com/usuarios/logar', UsuarioLogin)
  }

  cadastrar(Usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogcamisadez.herokuapp.com/usuarios/cadastrar', Usuario)
      }
}
