import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeupaginaComponent } from './peupagina.component';

describe('PeupaginaComponent', () => {
  let component: PeupaginaComponent;
  let fixture: ComponentFixture<PeupaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeupaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeupaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
