import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category.model';

@Pipe({
  name: 'showCategory',
})
export class ShowCategoryPipe implements PipeTransform {
  transform(value: Category[]) {
    return value.filter((category) => !category.hidden);
  }
}
