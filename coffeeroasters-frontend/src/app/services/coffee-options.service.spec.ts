import { TestBed } from '@angular/core/testing';

import { CoffeeOptionsService } from './coffee-options.service';

describe('CoffeeOptionsService', () => {
  let service: CoffeeOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
