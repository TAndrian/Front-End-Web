import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtreNomPrenom'
})
export class FiltreNomPrenomPipe implements PipeTransform {

    transform(value: any[], properties: [string, string], searchString?: string): any[] {
        if (typeof value !== 'undefined') {
            if (searchString !== '') {
                return value.filter((e) => {
                    return (e[properties[0]].toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || e[properties[1]].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
                });
            } else {
                return value;
            }

        } else {
            return [];
        }
    }

}
