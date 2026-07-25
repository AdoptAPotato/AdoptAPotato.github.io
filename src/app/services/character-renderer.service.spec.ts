import { TestBed } from '@angular/core/testing';

import { CharacterRendererService } from './character-renderer.service';

describe('CharacterRendererService', () => {
  let service: CharacterRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
