import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = "";
  email: string = "";
  selectedOption: string = "";

  ngOnInit() {
    // Retrieve form data from local storage
    this.name = localStorage.getItem('name')  || '';
    this.email = localStorage.getItem('email') || '';
    this.selectedOption = localStorage.getItem('selectedOption') || '';
  }

}
