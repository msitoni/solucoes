import { TestBed } from '@angular/core/testing';

import { SlideMainService } from './slide-main.service';

describe('SlideMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideMainService = TestBed.get(SlideMainService);
    expect(service).toBeTruthy();
  });
});
