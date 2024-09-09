import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {PokedexService} from "../utils/service/pokedex.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{


  pokedex:Pokemon[] = [];
  pokedex$: Observable<Pokemon[]>;

  constructor(private pokedexService: PokedexService) {
    this.pokedex$ = this.pokedexService.getPokedex$();
  };

  ngOnInit(): void {
    this.pokedex = this.pokedexService.getPokedex();
  }

  removePokemon(pokemon: Pokemon): void {
    this.pokedexService.removePokemon(pokemon);
    this.pokedex = this.pokedexService.getPokedex();
  }


}
