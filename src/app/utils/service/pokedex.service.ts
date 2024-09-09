import {Injectable, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

 private pokedex : Pokemon[] = [];
 private pokedexService$ = new BehaviorSubject<Pokemon[]>(this.pokedex);

 getPokedex(): Pokemon []{
   return this.pokedex;
 }
 getPokedex$(){
   return this.pokedexService$.asObservable();
 }

 addPokemon(pokemon: Pokemon): void {
   this.pokedex.push(pokemon);
   this.pokedexService$.next(this.pokedex);
 }

  removePokemon(pokemonToRemove: Pokemon): void {
    this.pokedex = this.pokedex.filter(pokemon => pokemon !== pokemonToRemove);
    this.pokedexService$.next(this.pokedex);
  }



}
