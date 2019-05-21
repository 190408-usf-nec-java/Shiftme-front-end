import { TestBed } from '@angular/core/testing';

import { BuisnessPageService } from './buisness-page.service';

describe('BuisnessPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuisnessPageService = TestBed.get(BuisnessPageService);
    expect(service).toBeTruthy();
  });
});
