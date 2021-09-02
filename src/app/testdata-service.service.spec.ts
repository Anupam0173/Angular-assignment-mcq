import { TestBed } from '@angular/core/testing';

import { TestdataServiceService } from './testdata-service.service';

describe('TestdataServiceService', () => {
  let service: TestdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
