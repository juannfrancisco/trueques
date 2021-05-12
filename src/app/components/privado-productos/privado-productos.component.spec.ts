import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoProductosComponent } from './privado-productos.component';

describe('PrivadoProductosComponent', () => {
  let component: PrivadoProductosComponent;
  let fixture: ComponentFixture<PrivadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
