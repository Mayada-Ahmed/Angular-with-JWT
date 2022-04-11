import { ListProductsComponent } from './Components/list-products/list-products.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { AddProductComponent } from './Components/Add Product/add-product/add-product.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'home', component:HomeComponent},
 {path:'addproduct',component:AddProductComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'productlist',component:ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
