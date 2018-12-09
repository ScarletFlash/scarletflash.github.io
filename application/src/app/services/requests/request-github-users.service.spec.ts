import { TestBed } from '@angular/core/testing';

import { RequestGithubUsersService } from './request-github-users.service';

describe('RequestGithubUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestGithubUsersService = TestBed.get(
      RequestGithubUsersService
    );
    expect(service).toBeTruthy();
  });
});
