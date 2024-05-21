import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() selected = new EventEmitter<string>();

  selectedFilter?: string;

  constructor(public filterService: FilterService) {}

  onSelectedFilter(value: string) {
    this.filterService.setFilter({ key: value, value: true });
  }
}
