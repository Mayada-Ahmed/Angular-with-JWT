import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { AuthenticationFormComponent } from './Components/AuthenticationForm/authentication-form/authentication-form.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { AddProductComponent } from './Components/Add Product/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Components/Home/home/home.component';
import { AuthorizeViewComponent } from './Authorize-view/authorize-view/authorize-view.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthenticationFormComponent,
    ListProductsComponent,
    AddProductComponent,
    NavbarComponent,
    HomeComponent,
    AuthorizeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
