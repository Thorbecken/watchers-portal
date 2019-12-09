import { TestBed } from '@angular/core/testing';

import { WorldServiceService } from './world-service.service';

describe('WorldServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldServiceService = TestBed.get(WorldServiceService);
    expect(service).toBeTruthy();
  });
});
