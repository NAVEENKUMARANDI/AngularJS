import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-student-validation-form',
  templateUrl: './student-validation-form.component.html',
  styleUrls: ['./student-validation-form.component.css']
})
export class StudentValidationFormComponent implements OnInit {

  Departmentlist: any = ['Information Technology', 'Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  studentProfile = this.fb.group({
    firstName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    lastName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    graduation : ['',[Validators.required]],
    departmentName: ['',[Validators.required]],
    dayscholar: ['', [Validators.required]],
//    hosteler: ['',[Validators.required]]
  });

  get firstName() {
    return this.studentProfile.get('firstName');
  }

  get lastName() {
    return this.studentProfile.get('lastName');
  }

  get graduation() {
    return this.studentProfile.get('graduation');
  }
  get departmentName() {
    return this.studentProfile.get('departmentName');
  }
  get dayscholar() {
    return this.studentProfile.get('dayscholar');
  }
}
