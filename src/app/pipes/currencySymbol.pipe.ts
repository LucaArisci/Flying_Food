import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencySymbolPipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'JPY':
        return '¥';
      default:
        return value;
    }
  }
}
