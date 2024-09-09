import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../../utils/service/pokedex.service";
import {ChuckNorrisService} from "../../utils/service/chuck-norris.service";

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent  implements OnInit {
  joke:string = '';

  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit(): void {

    this.loadChuckNorris();

  }
  loadChuckNorris(){
    this.chuckNorrisService.getRandomfact().subscribe(chuckNorris => {
      this.joke = chuckNorris;
    })
  }

}
