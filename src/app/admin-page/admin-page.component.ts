import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  name: string = "";
  price: string = "";
 
  constructor(private router: Router, private http: HttpClient) {}

  submitForm() {
    console.log("Hello");
    // Store form data in local storage or send it to an API
    localStorage.setItem('name', this.name);
    localStorage.setItem('price', this.price);

    const url = '"http://localhost:8080/products';
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
   //var params = this;
    const body = {
      name: this.name,
      price: this.price
    };
    console.log("Hello");
   //the HTTP post request
    return  this.http.post(url, body, { headers });


    // Navigate to the confirmation page
   // this.router.navigateByUrl('/productConfirmation');
  }
}
