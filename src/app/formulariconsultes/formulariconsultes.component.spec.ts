import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariconsultesComponent } from './formulariconsultes.component';

describe('FormulariconsultesComponent', () => {
  let component: FormulariconsultesComponent;
  let fixture: ComponentFixture<FormulariconsultesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariconsultesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariconsultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
