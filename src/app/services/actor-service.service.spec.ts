import { TestBed } from '@angular/core/testing';

import { ActorService } from './actor-service.service';

describe('ActorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorService = TestBed.get(ActorService);
    expect(service).toBeTruthy();
  });
});
