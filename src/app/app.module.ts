import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DynamicButtonComponent } from './shared/dynamic-button/dynamic-button.component';
import { AppRoutingModule } from './app-routing.module';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [AppComponent, DynamicButtonComponent, DishComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
