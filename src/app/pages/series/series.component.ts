import {Component} from '@angular/core';
import {pipe} from "rxjs";
import {RainbowPipe} from "../../utils/pipes/rainbow.pipe";



@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    RainbowPipe
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  series: string[] = ['games of thrones', 'house of dragons', 'l"anneau du pouvoir'];
  sort: string = "asc";

  remove(s: string) {
    this.series.splice(this.series.indexOf(s), 1);
  }

  descendant() {
    this.sort = "desc";
  }

  ascendant() {
    this.sort = "asc";

  }

  protected readonly pipe = pipe;
}

