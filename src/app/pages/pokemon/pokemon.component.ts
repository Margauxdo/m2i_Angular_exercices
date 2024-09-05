import { Component } from '@angular/core';
import {FormArray, FormArrayName, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


import {NgForOf} from "@angular/common";
import {Pokemon} from "../../models/pokemon";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    PokemonCardComponent
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  types:string[]=[
    'water' ,
    'fire' ,
    'electrik' ,
    'earth' ,
    'ice' ,
    'normal'

  ];
  pokemons: Pokemon[]=[];

  pokemonForm  = new FormGroup({
    namePokemon: new FormControl(''),
    descriptionPokemon: new FormControl(''),
    typePokemon: new FormControl(this.types),
    zone: new FormGroup({
      nameZone: new FormControl(''),
      region: new FormControl(''),
    }),
    attacks: new FormArray([
      new FormGroup({
    nameAttack: new FormControl(''),
    descriptionAttack: new FormControl(''),
    damages: new FormControl(''),
  })
    ])
  });

  onSubmit(){

    console.log(this.pokemonForm.value);
    this.pokemons.push(this.pokemonForm.value as Pokemon);
    localStorage.setItem("pokemon", JSON.stringify(this.pokemonForm.value));
    this.pokemonForm.reset();
  }
  createAttack(): FormGroup {
    return new FormGroup({
      nameAttack: new FormControl(''),
      descriptionAttack: new FormControl(''),
      damages: new FormControl(''),
    })
  }
  addAttack(){
  this.pokemonForm.controls.attacks.push(this.createAttack());

  }



}
