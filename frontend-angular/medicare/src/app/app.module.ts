import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { ProductsComponent } from './products/products.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ShopComponent } from './shop/shop.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { FormGroupName } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminHomeComponent,
    CartComponent,
    CategoriesComponent,
    CategoriesAddComponent,
    CheckoutComponent,
    IndexComponent,
    LoginComponent,
    OrderplacedComponent,
    ProductsComponent,
    ProductsAddComponent,
    ShopComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGroupName
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
