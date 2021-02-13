import { TestBed } from '@angular/core/testing';

import { AlertyfytService } from './alertyfyt.service';

describe('AlertyfytService', () => {
  let service: AlertyfytService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertyfytService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
