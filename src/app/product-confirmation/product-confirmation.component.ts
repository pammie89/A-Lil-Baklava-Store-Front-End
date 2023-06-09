import { Component } from '@angular/core';

@Component({
  selector: 'app-product-confirmation',
  templateUrl: './product-confirmation.component.html',
  styleUrls: ['./product-confirmation.component.css']
})
export class ProductConfirmationComponent {
  name: string = "";
  price: string = "";
  selectedOption: string = "";

  ngOnInit() {
    // Retrieve form data from local storage
    this.name = localStorage.getItem('name')  || '';
    this.price = localStorage.getItem('price') || '';
    this.selectedOption = localStorage.getItem('selectedOption') || '';
  }
}
