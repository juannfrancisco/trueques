import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoPerfilProductoComponent } from './privado-perfil-producto.component';

describe('PrivadoPerfilProductoComponent', () => {
  let component: PrivadoPerfilProductoComponent;
  let fixture: ComponentFixture<PrivadoPerfilProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoPerfilProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoPerfilProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
