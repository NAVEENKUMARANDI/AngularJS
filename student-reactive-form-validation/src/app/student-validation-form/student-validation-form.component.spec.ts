import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentValidationFormComponent } from './student-validation-form.component';

describe('StudentValidationFormComponent', () => {
  let component: StudentValidationFormComponent;
  let fixture: ComponentFixture<StudentValidationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentValidationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
