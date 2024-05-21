import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit',
})
export class UnitSymbolPipe implements PipeTransform {
  transform(value: any) {
    switch (value) {
      case 'gram':
        return 'g';
      case 'preset':
        return '';
      case 'large':
        return 'L';
      case 'medium':
        return 'M';
      case 'small':
        return 'S';
      default:
        return value;
    }
  }
}
