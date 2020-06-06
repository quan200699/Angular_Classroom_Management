import {async, inject, TestBed} from '@angular/core/testing';

import {ClassesService} from './classes.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`

describe('ClassesService', () => {
  let classesService: ClassesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ClassesService
      ],
    });

    classesService = TestBed.get(ClassesService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(classesService).toBeTruthy();
  });
  it(`should fetch classes as an Observable`, async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService1: ClassesService) => {
      const classes = [{
        id: 1,
        name: "C0320H1",
        classTime: "H",
        module: "Module 3"
      }, {
        id: 2,
        name: "C0520H1",
        classTime: "H",
        module: "Module 2"
      }, {
        id: 3,
        name: "C1219G1",
        classTime: "G",
        module: "Module 5"
      },];
      let req = httpMock.expectOne(API_URL + `/classes`);
      expect(req.request.method).toBe("GET");
      classesService1.getAllClasses()
        .subscribe((listClass: any) => {
          expect(listClass.length).toBe(3);
        });
      req.flush(classes);
      httpMock.verify();
    })));
});

