import { product, createProduct } from './../../../Models/product/product.model';
import { ProductService } from './../../../Services/Product/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private productService:ProductService) { }
  addProductForm = this.fb.group({
    name:['',Validators.required],
    image:['',Validators.required],
    discription:['',[Validators.required]],
  });

  saveChanges(p:any){
    console.log(p);
    this.productService.create(p);
  }

  cancel(){
    this.router.navigate(['/home']);
  }

  getErrorMsg(){
    const field = this.addProductForm.get('name');
    if(field?.hasError('required'))
    {
      return 'The name is required'
    }else
    {
      return '';
    }
  }

  getErrorMsgDes(){
    const field = this.addProductForm.get('discription');
    if(field?.hasError('required'))
    {
      return 'The discription is required'
    }else
    {
      return '';
    }
  }

  getErrorMsgImg(){
    const field = this.addProductForm.get('image');
    if(field?.hasError('required'))
    {
      return 'The URL is required'
    }
    else
    {
      return '';
    }
  }



  ngOnInit(): void {
  }

}
