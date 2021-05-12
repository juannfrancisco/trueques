import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoSideBarComponent } from './privado-side-bar.component';

describe('PrivadoSideBarComponent', () => {
  let component: PrivadoSideBarComponent;
  let fixture: ComponentFixture<PrivadoSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
