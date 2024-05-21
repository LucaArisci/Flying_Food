import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/filter.model';

type Nullable<T> = T | null;

@Pipe({ name: 'filterBy' })
export class FilterByPipe implements PipeTransform {
  transform<T extends Record<string, any>>(
    value: Nullable<T[]>,
    filter: Filter
  ): Nullable<T[]> {
    if (!value || filter.key === '') {
      return value;
    }

    if (filter.key === 'tags') {
      return value.filter((item) =>
        item[filter.key].some((element: string) => element === filter.value)
      );
    }

    return value.filter((item) => item[filter.key]);
  }
}
