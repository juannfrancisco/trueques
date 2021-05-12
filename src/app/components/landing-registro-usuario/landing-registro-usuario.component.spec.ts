import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRegistroUsuarioComponent } from './landing-registro-usuario.component';

describe('LandingRegistroUsuarioComponent', () => {
  let component: LandingRegistroUsuarioComponent;
  let fixture: ComponentFixture<LandingRegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRegistroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
