import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokedexService} from "../../utils/service/pokedex.service";

@Component({
  selector: 'app-pokemon-card[poke]',
  standalone: true,
  imports: [

  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input()poke!:Pokemon;
  @Output()deletePokemon = new EventEmitter<Pokemon>();

  constructor(private pokedexService: PokedexService) {};

  onDelete(pokemon: Pokemon): void {
    this.deletePokemon.emit(pokemon);
  }
  addToPokedex(pokemon: Pokemon): void {
    this.pokedexService.addPokemon(pokemon);
  }



}
