import { Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SeriesComponent} from "./pages/series/series.component";
import {LibrairyComponent} from "./pages/librairy/librairy.component";


export const routes: Routes = [
  { path :'count', component: CounterComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'librairy', component: LibrairyComponent}
  //{path: 'pipes', component: PipesComponent},
];
