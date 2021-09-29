import { Injectable } from '@angular/core';
import { Musica } from '../model.models/musica';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MusicaService {

  private baseURL = "";

  constructor(private http: HttpClient) { }

  list(): Observable< Musica[]>{
    return this.http.get<Musica[]>( `${this.baseURL}/list`);
  }

  create(): Observable< Musica[]>{
    return this.http.get<Musica[]>( `${this.baseURL}/create`);
  }

  delete(): Observable<Musica[]>{
    return this.http.get<Musica[]>( `${this.baseURL}/delete`);
  }

  add(): Observable<Musica[]>{
    return this.http.get<Musica[]>( `${this.baseURL}/add`);
  }
}
