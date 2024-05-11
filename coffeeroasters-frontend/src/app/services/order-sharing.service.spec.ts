import { TestBed } from '@angular/core/testing';

import { OrderSharingService } from './order-sharing.service';

describe('OrderSharingService', () => {
  let service: OrderSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
