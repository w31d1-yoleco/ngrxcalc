import { TestBed } from '@angular/core/testing';

import { CalcserviceconnectService } from './calcserviceconnect.service';

describe('CalcserviceconnectService', () => {
  let service: CalcserviceconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcserviceconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
