import { TestBed } from '@angular/core/testing';

import { CmpService } from './cmp.service';

describe('CmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmpService = TestBed.get(CmpService);
    expect(service).toBeTruthy();
  });
});
