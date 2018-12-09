import { TestBed } from '@angular/core/testing';

import { RepositoriesPageStateService } from './repositories-page-state.service';

describe('RepositoriesPageStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoriesPageStateService = TestBed.get(RepositoriesPageStateService);
    expect(service).toBeTruthy();
  });
});
