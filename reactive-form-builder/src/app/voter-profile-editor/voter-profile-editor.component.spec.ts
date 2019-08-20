import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterProfileEditorComponent } from './voter-profile-editor.component';

describe('VoterProfileEditorComponent', () => {
  let component: VoterProfileEditorComponent;
  let fixture: ComponentFixture<VoterProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
