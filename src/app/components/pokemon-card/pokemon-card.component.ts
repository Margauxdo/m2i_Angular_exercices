import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

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

  onDelete(pokemon: Pokemon): void {
    this.deletePokemon.emit(pokemon);
  }

}
