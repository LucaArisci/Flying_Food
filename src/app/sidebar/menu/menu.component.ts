import { Component, OnInit } from '@angular/core';
import { StateStoreService } from '../../services/store.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class AppMenuComponent implements OnInit {
  // menuState: string[] | null = [];

  constructor(
    // public stateStoreService: StateStoreService<string[]>,
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
    // this.stateStoreService.updateState(this.menuState);
    /* this.stateStoreService.state.subscribe((state) => {
      this.menuState = state;
    }); */
  }

  // addDish(menu: string[]) {
  //   this.stateStoreService.updateState((prev) =>
  //     prev === null ? [`Dish 1`] : [...prev, `Dish ${prev.length + 1}`]
  //   );

  //   /*  const newDish = `Dish ${this.menuState.length + 1}`;
  //   this.stateStoreService.updateState([...(this.menuState || []), newDish]);
  //   console.log(
  //     '🚀 ~ AppMenuComponent ~ removeDish ~ menuState:',
  //     this.menuState
  //   ); */
  // }

  // removeDish() {
  //   this.stateStoreService.updateState((prev) =>
  //     prev === null ? [] : [...prev.slice(0, prev.length - 1)]
  //   );

  //   // if (this.menuState) {
  //   //   this.menuState.pop();
  //   //   this.stateStoreService.updateState([...this.menuState]);
  //   // }
  // }
}
