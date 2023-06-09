import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  name: string = "";
  email: string = "";
  selectedOption: string = "";

  constructor(private router: Router) {}

  submitForm() {
    // Store form data in local storage or send it to an API
    localStorage.setItem('name', this.name);
    localStorage.setItem('email', this.email);
    localStorage.setItem('selectedOption', this.selectedOption);

    // Navigate to the confirmation page
    this.router.navigateByUrl('/confirmation');
  }
}
