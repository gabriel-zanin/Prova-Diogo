import { Component, OnInit } from '@angular/core';
import { Musica } from './model.models/musica';
import { MusicaService } from './services/musica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: MusicaService) {}
  musicasExt: Musica[] = [];

  ngOnInit(): void {
    this.service.list().subscribe(musicas => {

      this.musicasExt = musicas;
      for(let musica of musicas){
        console.log(musicas)
      }


    })
  }

  title = 'Prova Diogo';
}
