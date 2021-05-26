import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoEditarProductoComponent } from './privado-editar-producto.component';

describe('PrivadoEditarProductoComponent', () => {
  let component: PrivadoEditarProductoComponent;
  let fixture: ComponentFixture<PrivadoEditarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoEditarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoEditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
