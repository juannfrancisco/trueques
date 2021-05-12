import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRecuperarContrasenaComponent } from './landing-recuperar-contrasena.component';

describe('LandingRecuperarContrasenaComponent', () => {
  let component: LandingRecuperarContrasenaComponent;
  let fixture: ComponentFixture<LandingRecuperarContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRecuperarContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
