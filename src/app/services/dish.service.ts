import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import { environment } from '../../environment/environment.dev';

type Nullable<T> = T | null;

@Injectable()
export class DishService {
  private _dishes: Nullable<Dish[]> = [];

  constructor(private http: HttpClient) {
    this.fetchDishes().subscribe((dishes) => {
      this._dishes = dishes;
    });
  }

  get dishes() {
    return this._dishes;
  }

  fetchDishes() {
    return this.http.get<Dish[]>(`${environment.apiUrl}/products`, {
      headers: new HttpHeaders().set('x-api-key', environment.apiKey),
    });
  }

  // setDishes() {
  //   this.getDishes().subscribe((dishes) => (this.dishes = dishes));
  // }

  /* getFilteredDishes(filterValue: string) {
    this.filteredDishes = new FilterByPipe().transform(
      this.dishes,
      'tags',
      filterValue
    );

    return this.filteredDishes;
  } */
}
