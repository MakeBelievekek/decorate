import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): string {
    const toFormat = (value + '').split('').reverse().join('');
    console.log(toFormat);
    let result = toFormat;

    const temp = [];
    if (toFormat.length > 3) {
      for (let i = 0; i < toFormat.length; i++) {
        const modulus3 = i % 3;
        temp.push(toFormat.substr(i, 1));
        if (modulus3 === 2 && i !== toFormat.length - 1) {
          temp.push('.');
        }
      }
      result = '';
      temp.forEach(char => result += char);
    }


    return result.split('').reverse().join('');
  }
}
