import { TestBed } from '@angular/core/testing';

import { ProjectsLatestService } from './projects-latest.service';

describe('ProjectsLatestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsLatestService = TestBed.get(ProjectsLatestService);
    expect(service).toBeTruthy();
  });
});
