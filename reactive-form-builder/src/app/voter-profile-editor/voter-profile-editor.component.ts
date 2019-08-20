import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-voter-profile-editor',
  templateUrl: './voter-profile-editor.component.html',
  styleUrls: ['./voter-profile-editor.component.css']
})
export class VoterProfileEditorComponent implements OnInit {

  voterProfileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
  }),
});
  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.voterProfileForm.value);
  }

  submit() {
    this.voterProfileForm.setValue('');
  }
}
