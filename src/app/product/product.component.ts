import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }

  createProduct(): void {
    console.log("Create Product>>>",this.newProduct)
    this.productService.createProduct(this.newProduct)
      .subscribe(
        (response) => {
          console.log('Product created:', response);
          this.getProducts();
          this.newProduct = {};
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }

  updateProduct(id: string, product: any): void {
    console.log("Update Product");
    this.productService.updateProduct(id, product)
      .subscribe(
        (response) => {
          console.log('Product updated:', response);
          this.getProducts();
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        (response) => {
          console.log('Product deleted:', response);
          this.getProducts();
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }
}

