import { TestBed } from '@angular/core/testing';

import { ProductosJsonServerService } from './productos-json-server.service';

describe('ProductosJsonServerService', () => {
  let service: ProductosJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
