import { product } from './../../Models/product/product.model';
import { ProductService } from './../../Services/Product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: product[]=[];

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products=>{
      this.products = products;
      console.log(products)
    });
  }

}
