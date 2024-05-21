import { Injectable } from '@angular/core';
import { Filter } from '../models/filter.model';

@Injectable()
export class FilterService {
  private _selectedFilter: Filter = { key: '', value: '' };

  availableFilters: { value: string; label: string }[] = [
    { value: '', label: 'All' },
    { value: 'available', label: 'Available' },
    { value: 'new', label: 'New' },
    { value: 'discountRate', label: 'Discount' },
  ];

  get selectedFilter() {
    return this._selectedFilter;
  }

  get filterValue() {
    return this._selectedFilter.value;
  }

  setFilter(filter: Filter) {
    this._selectedFilter = filter;
  }
}
