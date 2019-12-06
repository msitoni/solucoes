import { TestBed } from '@angular/core/testing';

import { GalleryGroupService } from './gallery-group.service';

describe('GalleryGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryGroupService = TestBed.get(GalleryGroupService);
    expect(service).toBeTruthy();
  });
});
