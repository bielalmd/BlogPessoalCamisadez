import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './tema-delete/tema-delete.component';
import { PostagemEditComponent } from './tema-edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './tema-delete/postagem-delete/postagem-delete.component';
import { UsuarioEditComponent } from './tema-edit/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},

{path: 'inicio', component: InicioComponent},
{path: 'tema', component: TemaComponent},

{path: 'tema-edit/:id', component: TemaEditComponent},

{path: 'tema-delete/:id', component: TemaDeleteComponent},
{path: 'postagem-edit/:id', component: PostagemEditComponent},
{path: 'postagem-delete/:id',component: PostagemDeleteComponent},
{path: 'usuario-edit/:id', component: UsuarioEditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
