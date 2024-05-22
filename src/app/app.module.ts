import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { DynamicButtonComponent } from './shared/dynamic-button/dynamic-button.component';
import { AppRoutingModule } from './app-routing.module';
import { DishComponent } from './products/dish/dish.component';
import { AppMenuComponent } from './sidebar/menu/menu.component';
import { AppProfileComponent } from './sidebar/profile/profile.component';
import { DishService } from './services/dish.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaxLengthPipe } from './pipes/maxLength.pipe';
import { CurrencySymbolPipe } from './pipes/currencySymbol.pipe';
import { UnitSymbolPipe } from './pipes/unitSymbol.pipe';
import { MenuService } from './services/menu.service';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './products/categories/category.component';
import { StateStoreService } from './services/store.service';
import { CategoryService } from './services/category.service';
import { ShowCategoryPipe } from './pipes/showCategory.pipe';
import { FilterByPipe } from './pipes/filterBy.pipe';
import { FilterService } from './services/filter.service';
import { FilterComponent } from './products/filters/filter.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DynamicButtonComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ProductsComponent,
    CategoryComponent,
    DishComponent,
    AppMenuComponent,
    AppProfileComponent,
    FilterComponent,
    MaxLengthPipe,
    CurrencySymbolPipe,
    UnitSymbolPipe,
    ShowCategoryPipe,
    FilterByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DishService,
    MenuService,
    CategoryService,
    StateStoreService,
    FilterService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
