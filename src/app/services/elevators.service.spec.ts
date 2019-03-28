import { TestBed } from '@angular/core/testing';

import { ElevatorsService } from './elevators.service';
import { HttpClientModule } from '@angular/common/http';

describe('ElevatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ElevatorsService = TestBed.get(ElevatorsService);
    expect(service).toBeTruthy();
  });
});
