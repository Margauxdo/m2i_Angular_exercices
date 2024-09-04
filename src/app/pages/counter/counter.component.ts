import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0;
  size =24;

  Increment(){
    this.count++;
  }
  Decrement(){
    this.count--;
  }
  getColor(){
    return {
      'color': this.count % 2 === 0 ? 'red' : 'green',
      'font-size': `${this.size}px`
    }

  }



}
