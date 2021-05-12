import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoMisProductosComponent } from './privado-mis-productos.component';

describe('PrivadoMisProductosComponent', () => {
  let component: PrivadoMisProductosComponent;
  let fixture: ComponentFixture<PrivadoMisProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadoMisProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoMisProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
