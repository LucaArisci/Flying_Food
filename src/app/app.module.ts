import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import { CircleButtonComponent } from './shared/circle-button/circle-button.component';
import { AppRoutingModule } from './app-routing.module';
import { StdButtonComponent } from './shared/std-button/std-button.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish-list/dish/dish.component';

@NgModule({
  declarations: [AppComponent, CustomButtonComponent, CircleButtonComponent, StdButtonComponent, DishListComponent, DishComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
