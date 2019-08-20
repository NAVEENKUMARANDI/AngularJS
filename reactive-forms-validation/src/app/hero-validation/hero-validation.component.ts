import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgModule }      from '@angular/core'; 


@Component({
  selector: 'app-hero-validation',
  templateUrl: './hero-validation.component.html',
  styleUrls: ['./hero-validation.component.css']
})
export class HeroValidationComponent implements OnInit {
  heroForm;
  hero;
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
    //    forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  
  }
  
  get name() { return this.heroForm.get('name'); }
  
  get power() { return this.heroForm.get('power'); }

}
