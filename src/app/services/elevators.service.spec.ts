import { TestBed } from '@angular/core/testing';

import { ElevatorsService } from './elevators.service';

describe('ElevatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElevatorsService = TestBed.get(ElevatorsService);
    expect(service).toBeTruthy();
  });
});
