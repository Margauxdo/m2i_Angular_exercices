import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {map, Observable} from "rxjs";
import {PokedexService} from "../../utils/service/pokedex.service";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  pokedexCount$!: Observable<number>;


  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokedexCount$ = this.pokedexService.getPokedex$().pipe(
      map((pokedex => pokedex.length) )
    );

  }
}
