import { Component, OnInit } from '@angular/core';
import { Product } from '../@entities/Product';
import { ProductService } from '../@services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

}
