import { Component } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { DishService } from '../../services/dish.service';
import { StateStoreService } from '../../services/store.service';
import { FilterService } from '../../services/filter.service';

type Nullable<T> = T | null;

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent {
  constructor(
    public stateStoreService: StateStoreService<Dish[]>,
    public dishService: DishService,
    public filterService: FilterService
  ) {}

  // ngOnInit(): void {
  //   this.dishes = this.dishService.filterDishes(
  //     this.stateStoreService.getState(),
  //     ''
  //   );
  // }

  // filteredDishes = filterService.pipe(
  //   filter(x),
  //   map((cat) => this.dishService)
  // );
}
