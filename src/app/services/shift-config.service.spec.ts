import { TestBed } from '@angular/core/testing';

import { ShiftConfigService } from './shift-config.service';

describe('ShiftConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftConfigService = TestBed.get(ShiftConfigService);
    expect(service).toBeTruthy();
  });
});
