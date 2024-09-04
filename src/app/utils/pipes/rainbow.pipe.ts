import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbow',
  standalone: true
})
export class RainbowPipe implements PipeTransform {

  transform(array:string[], sort: string = 'asc' ):string[] {



   if (sort === 'asc') {
     array.sort();
   }else {
     array.sort().reverse();
   }
return array;



  }

}
