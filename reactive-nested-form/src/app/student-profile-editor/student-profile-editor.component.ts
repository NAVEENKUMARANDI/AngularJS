import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-profile-editor',
  templateUrl: './student-profile-editor.component.html',
  styleUrls: ['./student-profile-editor.component.css']
})
export class StudentProfileEditorComponent implements OnInit {

  studentProfileForm = new FormGroup({
    rollNumber: new FormControl(''),
    firstName: new FormControl(''),
    subjects: new FormGroup({
      maths: new FormControl(''),
      science: new FormControl(''),
      social: new FormControl(''),
      english: new FormControl(''),
      tamil: new FormControl('')
    }) 
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.studentProfileForm.value);
  }

  upadteStudent() {
    this.studentProfileForm.setValue({
      rollNumber: "001",
      firstName: "Dhamo",
      subjects: {
        maths: 98,
        science: 88,
        social: 79,
        english: 90,
        tamil: 89
      }
     })
  }
}