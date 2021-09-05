import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
return this.http.post<UsuarioLogin>('https://blogcamisadez.herokuapp.com/usuarios/logar', UsuarioLogin)
  }

  cadastrar(Usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogcamisadez.herokuapp.com/usuarios/cadastrar', Usuario)
      }

      getUserById(id: number):Observable<Usuario>{ // crase quando se usa texto fixo com variavel
        return this.http.get<Usuario>(`https://blogcamisadez.herokuapp.com/usuarios/${id}`)
      }

      logado(){
        let ok: boolean = false
      
        if(environment.token != ''){
          ok = true
        }
        return ok
      }

}



