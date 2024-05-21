import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { StateStoreService } from '../../services/store.service';
import { Dish } from '../../models/dish.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    public stateStoreService: StateStoreService<Dish[]>,
    private categoryService: CategoryService,
    public filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSelectedCategory(category: string) {
    this.filterService.setFilter(
      this.filterService.filterValue === category
        ? { key: '', value: '' }
        : { key: 'tags', value: category }
    );
  }
}

// export class CategoryComponent implements OnInit {
//   categories: Category[] = [];
//   selected: string = '';

//   constructor(
//     public stateStoreService: StateStoreService<Dish[]>,
//     private categoryService: CategoryService,
//     private filterService: FilterService
//   ) {}

//   ngOnInit(): void {
//     this.categoryService.getCategories().subscribe((categories) => {
//       this.categories = categories;
//     });
//   }

//   onSelectCategory(category: string) {
//     if (this.selected === category) {
//       this.filterService.setFilter(undefined);
//       this.selected = '';
//       return;
//     }

//     this.filterService.setFilter({ key: 'tags', value: category });
//     this.selected = category;
//   }
// }
