import { TestBed } from '@angular/core/testing';

import { CreatorStateService } from './creator-state.service';

describe('CreatorStateService', () => {
  let service: CreatorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
