import {Pipe, PipeTransform} from '@angular/core';
import {PartyData} from '../model/party-data';

@Pipe({name: 'sortBy'})
export class SortPipe implements PipeTransform {
  transform(array: Array<PartyData>, args: string): Array<PartyData> {
    array.sort((a: any, b: any) => {
      if (a[args] === b[args]) {
        return 0;
      }

      return a[args] < b[args] ? -1 : 1;
    });

    return array;
  }
}
