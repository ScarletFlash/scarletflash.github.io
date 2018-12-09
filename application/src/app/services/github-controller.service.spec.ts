import { TestBed } from '@angular/core/testing';

import { GithubControllerService } from './github-controller.service';

describe('GithubControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubControllerService = TestBed.get(
      GithubControllerService
    );
    expect(service).toBeTruthy();
  });
});
