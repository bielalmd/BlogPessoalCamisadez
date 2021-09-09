import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

//     refreshToken()
// {} this.authService.refreshToken()


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
        return this.http.get<Usuario>(`https://blogcamisadez.herokuapp.com/usuarios/${id}`, this.token)
      }

      putUsuario(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>('https://blogcamisadez.herokuapp.com/usuarios/alterar',Usuario, this.token)

      }

      logado(){
        let ok: boolean = false
      
        if(environment.token != ''){
          ok = true
        }
        return ok
      }

}



