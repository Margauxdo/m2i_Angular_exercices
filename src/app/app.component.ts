import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {NavComponent} from "./components/nav/nav.component";
import {ChuckNorrisComponent} from "./pages/chuck-norris/chuck-norris.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ChuckNorrisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exo1Angular';
}
