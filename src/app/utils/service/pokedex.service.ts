import {Injectable, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

 private pokedex : Pokemon[] = [];

 getPokedex(): Pokemon []{
   return this.pokedex;
 }

 addPokemon(pokemon: Pokemon): void {
   this.pokedex.push(pokemon);
 }
 removePokemon(pokemon: Pokemon): void {
   this.pokedex = this.pokedex.filter(pokemon => pokemon !== pokemon);

 }


}
