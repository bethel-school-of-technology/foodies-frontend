import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: any[];

  constructor() { }

  ngOnInit() {
    this.title = 'Customers Login';
    this.people = [
      { id: 1, name: 'XXX', email: 'North', password: '@!wedTh'},
      { id: 1, name: 'XXX', email: 'North', password: '@!wedTh'},
      { id: 1, name: 'XXX', email: 'North', password: '@!wedTh'},
//when ready to pull from server dynamically - should say customer register date or password?
    ];

}
};
