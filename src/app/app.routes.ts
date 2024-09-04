import { Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SeriesComponent} from "./pages/series/series.component";
import {LibrairyComponent} from "./pages/librairy/librairy.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";


export const routes: Routes = [
  { path :'count', component: CounterComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'library', component: LibrairyComponent},
  {path: 'pokemon', component: PokemonComponent}
  //{path: 'pipes', component: PipesComponent},
];
