import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name:'INRCurrency'
})
export class INRCurrencyPipe implements PipeTransform {
  transform(value:number): string{

    value = Math.round(value);

    var result = value.toString().split('.');

    var lastThree = result[0].substring(result[0].length - 3);

    var otherNumbers = result[0].substring(0, result[0].length - 3);

    if (otherNumbers != '' && otherNumbers != '-')  lastThree = ',' + lastThree;
    var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;

    if (result.length > 1) {
        output += "." + result[1];
    }

    return "₹"+output;

    }
}


@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {

  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date);
    date.setDate(date.getDate()-day);
    return new DatePipe('en-US').transform(date, format);
  }
}


@Pipe ({
  name: 'Multiplier'
})

export class MultiplierPipe implements PipeTransform {
  transform(value: number, multiply: string): number {
     let mul = parseFloat(multiply);
     return mul * value;
  }
}
