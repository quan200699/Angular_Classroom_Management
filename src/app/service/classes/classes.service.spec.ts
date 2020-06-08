import {async, inject, TestBed} from '@angular/core/testing';

import {ClassesService} from './classes.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {Classes} from "../../interface/classes";

const API_URL = `${environment.apiUrl}`

describe('ClassesService', () => {
  let classesService: ClassesService;
  let httpMock: HttpTestingController;
  let listClasses: Classes[] = [];
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
  it(`should fetch classes as an Observable has length = 3`, async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService1: ClassesService) => {
      listClasses = [{
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
      classesService1.getAllClasses()
        .subscribe((listClass: any) => {
          expect(listClass.length).toBe(3);
          expect(listClass).toEqual(listClasses)
        });
      let req = httpMock.expectOne(API_URL + '/classes');
      expect(req.request.method).toBe("GET");
      req.flush(listClasses);
    })));

  it('should POST and return this object', async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService: ClassesService) => {
      const classDetail = {
        id: 3,
        name: "C1219G1",
        classTime: "G",
        module: "Module 5"
      };
      classesService.getClasses(3).subscribe(classes => {
        expect(classes).toEqual(classDetail)
      })
      let req = httpMock.expectOne(API_URL + `/classes/3`);
      expect(req.request.method).toBe("GET");
    })));


  it('should post and return this data after create', async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService: ClassesService) => {
      const classes = {
        id: 4,
        name: "C0220H1",
        classTime: "H",
        module: "Module 4"
      }
      classesService.createClasses(classes).subscribe(newClass => {
        expect(newClass).toEqual(classes);
      })
      let req = httpMock.expectOne(API_URL + '/classes');
      expect(req.request.method).toBe('POST');
    })));

  it('should put and return this data after update', async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService: ClassesService) => {
      const classes = {
        id: 3,
        name: "C0520H1",
        classTime: 'H',
        module: 'module 2'
      }
      classesService.updateClasses(3, classes).subscribe(newClasses => {
        expect(newClasses).toEqual(classes);
      })
      let req = httpMock.expectOne(API_URL + '/classes/3');
      expect(req.request.method).toBe('PUT');
    })))

  it('should method delete', async(inject([HttpTestingController, ClassesService],
    (httpClient: HttpTestingController, classesService: ClassesService) => {
      classesService.deleteClasses(3).subscribe(() => {
      });
      let req = httpMock.expectOne(API_URL + '/classes/3');
      expect(req.request.method).toBe('DELETE');
    })))
  afterEach(() => {
    httpMock.verify();
  })
});

