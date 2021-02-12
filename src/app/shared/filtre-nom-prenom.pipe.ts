import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreNomPrenom'
})
export class FiltreNomPrenomPipe implements PipeTransform {

  transform(value: any[], property?: string,   searchString?: string): any[]{
    if (typeof value !== 'undefined') {
      if (searchString !== ''){
        return value.filter((e) => {
          return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
      }
      else {
        return value;
      }

    } else {
      return [];
    }  }

}
