import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoCrearProductoComponent } from './privado-crear-producto.component';

describe('PrivadoCrearProductoComponent', () => {
  let component: PrivadoCrearProductoComponent;
  let fixture: ComponentFixture<PrivadoCrearProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoCrearProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoCrearProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
