import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditorComponent } from './student-profile-editor.component';

describe('StudentProfileEditorComponent', () => {
  let component: StudentProfileEditorComponent;
  let fixture: ComponentFixture<StudentProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
