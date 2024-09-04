import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {Type} from "../../models/type";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
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

  pokemonForm: FormGroup  = new FormGroup({
    namePokemon: new FormControl(''),
    descriptionPokemon: new FormControl(''),
    typePokemon: new FormControl(''),
  });

  onSubmit(){

    console.log(this.pokemonForm.value);
  }


}
