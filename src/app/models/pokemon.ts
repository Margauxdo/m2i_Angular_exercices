import {Type} from "./type.js";
import {Attack} from "./attack.js";
import {Zone} from "./zone.js";


export type Pokemon = {
  name: string;
  description: string;
  types : string[];
  attacks: Attack[];
  zones: Zone;
}
