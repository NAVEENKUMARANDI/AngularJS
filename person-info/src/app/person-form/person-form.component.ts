import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  model = new Person("", "");

  constructor() { }

  ngOnInit() {
  }

  submitted = false;

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { this.submitted = true; }

}
