import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService  {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor( private http: HttpClient ) { }

  getRandomfact(): Observable<ChuckNorrisFact> {
    return this.http.get<>(this.apiUrl);

  }

}
