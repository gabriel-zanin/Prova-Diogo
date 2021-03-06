import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarMusicaComponent } from './components/views/musicas/listar-musica/listar-musica.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarMusicaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
