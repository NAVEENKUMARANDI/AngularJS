import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fb: FormBuilder) {
  }

  registrationForm = this.fb.group({
    graduate: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
} 


get myForm() {
  return this.registrationForm.get('graduate');
}
}
