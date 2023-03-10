import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products.component";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
   ProductsComponent,
   ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
   ProductsComponent,
   ProductComponent
  ]
})
export class ProductsModule { }