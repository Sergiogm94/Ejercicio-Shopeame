import { TestBed } from '@angular/core/testing';

import { ShopeameService } from './shopeame.service';

describe('ShopeameService', () => {
  let service: ShopeameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopeameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
