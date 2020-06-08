import {async, inject, TestBed} from '@angular/core/testing';

import {JobService} from './job.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {Job} from "../../interface/job";

const API_URL = `${environment.apiUrl}`;
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

  it('should GET and return list job', async(inject([HttpTestingController, JobService],
    (httpClient: HttpTestingController, jobService: JobService) => {
      const listJob = [{
        id: 1,
        name: 'FULL TIME'
      }, {
        id: 2,
        name: 'PART TIME 1'
      }, {
        id: 3,
        name: 'PART TIME 2'
      }];
      jobService.getAllJob().subscribe(jobs => {
        expect(jobs).toEqual(listJob);
      });
      let req = httpMock.expectOne(API_URL + '/jobs');
      expect(req.request.method).toBe('GET');
      req.flush(listJob);
    })));

  it('should GET and return this job', async(inject([HttpTestingController, JobService],
    (httpClient: HttpTestingController, jobService: JobService) => {
      const job = {
        id: 3,
        name: 'PART TIME 2'
      };
      jobService.getJob(3).subscribe(currentJob => {
        expect(currentJob).toEqual(job);
      });
      let req = httpMock.expectOne(API_URL + '/jobs/3');
      expect(req.request.method).toBe('GET');
      req.flush(job);
    })));

  it('should POST and return this job after created!', async(inject([HttpTestingController, JobService],
    (httpClient: HttpTestingController, jobService: JobService) => {
      const job = {
        id: 1,
        name: 'FULL TIME'
      };
      jobService.createJob(job).subscribe(newJob => {
        expect(newJob).toEqual(job);
      })
      let req = httpMock.expectOne(API_URL + '/jobs');
      expect(req.request.method).toBe('POST');
      req.flush(job);
    })));

  it('should PUT and return this object after updated', async(inject([HttpTestingController, JobService],
    (httpClient: HttpTestingController, jobService: JobService) => {
      const job = {
        id: 1,
        name: 'Part time'
      };
      jobService.updateJob(1, job).subscribe(newJob => {
        expect(newJob).toEqual(job);
      })
      let req = httpMock.expectOne(API_URL + '/jobs/1');
      expect(req.request.method).toEqual('PUT');
      req.flush(job);
    })));

  it('should DELETE', async(inject([HttpTestingController, JobService],
    (httpClient: HttpTestingController, jobService: JobService) => {
    jobService.deleteJob(3).subscribe();
    let req = httpMock.expectOne(API_URL + '/jobs/3');
    expect(req.request.method).toEqual('DELETE');
    })))

  afterEach(() => {
    httpMock.verify();
  })
});
