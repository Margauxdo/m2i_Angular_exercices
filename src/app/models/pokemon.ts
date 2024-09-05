
import {Attack} from "./attack.js";
import {Zone} from "./zone.js";


export type Pokemon = {
  namePokemon: string;
  descriptionPokemon: string;
  typePokemon : string[];
  attacks: Attack[];
  zone: Zone;
}
