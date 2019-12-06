import { TestBed } from '@angular/core/testing';

import { CustomerTestimonialsService } from './customer-testimonials.service';

describe('CustomerTestimonialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerTestimonialsService = TestBed.get(CustomerTestimonialsService);
    expect(service).toBeTruthy();
  });
});
