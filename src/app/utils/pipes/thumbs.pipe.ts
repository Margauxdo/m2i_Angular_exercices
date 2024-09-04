import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../../models/books";

@Pipe({
  name: 'thumbs',
  standalone: true
})
export class ThumbsPipe implements PipeTransform {

  transform(value: string, thumbs: boolean):string {

   return thumbs ? `${value}👍🏼` : `${value}👎🏼`;
  }

}
