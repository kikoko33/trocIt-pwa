import { TestBed } from '@angular/core/testing';

import { GiveListService } from './give-list.service';

describe('GiveListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiveListService = TestBed.get(GiveListService);
    expect(service).toBeTruthy();
  });
});
