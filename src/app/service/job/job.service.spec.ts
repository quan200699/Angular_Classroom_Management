import {TestBed} from '@angular/core/testing';

import {JobService} from './job.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('JobService', () => {
  let jobService: JobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        JobService
      ]
    });
    jobService = TestBed.get(JobService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  })
});
