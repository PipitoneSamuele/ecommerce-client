import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HeaderComponent } from './@outer/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './@outer/home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule, 
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
