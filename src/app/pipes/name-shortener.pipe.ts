import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nameShortener'
})
export class NameShortenerPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let result;
    if (value.length > limit) {
      result = value.substring(0, limit) + '...';
    }
    return result;
  }

}
