import { TestBed } from '@angular/core/testing';

import { SelectLocaleService } from './select-locale.service';

describe('SelectLocaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectLocaleService = TestBed.get(SelectLocaleService);
    expect(service).toBeTruthy();
  });
});
