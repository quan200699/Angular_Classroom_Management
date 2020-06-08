import {async, inject, TestBed} from '@angular/core/testing';

import {ClassroomService} from './classroom.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;
describe('ClassroomService', () => {
  let classroomService: ClassroomService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ClassroomService
      ]
    });
    classroomService = TestBed.get(ClassroomService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ClassroomService = TestBed.get(ClassroomService);
    expect(service).toBeTruthy();
  });

  it('should GET and return a list classroom', async(inject([HttpTestingController, ClassroomService],
    (httpClient: HttpTestingController, classroomService: ClassroomService) => {
      const listClassroom = [{
        id: 1,
        name: "Tầng 3 TT01",
        capacity: 49
      }, {
        id: 2,
        name: "Tầng 4 TT01",
        capacity: 40
      }, {
        id: 1,
        name: "Tầng 3 TT04",
        capacity: 30
      }];
      classroomService.getAllClassroom().subscribe(classrooms => {
        expect(classrooms).toEqual(listClassroom);
        expect(classrooms.length).toEqual(3);
      })
      let req = httpMock.expectOne(API_URL + '/classrooms');
      expect(req.request.method).toBe("GET");
      req.flush(listClassroom);
    })));

  it('should GET and return this object', async(inject([HttpTestingController, ClassroomService],
    (httpClient: HttpTestingController, classroomService: ClassroomService) => {
      const classroom = {
        id: 1,
        name: "Tầng 3 TT01",
        capacity: 49
      }
      classroomService.getClassroom(1).subscribe(currentClassroom => {
        expect(currentClassroom).toEqual(classroom);
      })
      let req = httpMock.expectOne(API_URL + '/classrooms/1');
      expect(req.request.method).toBe('GET');
      req.flush(classroom);
    })));

  it('should POST and return this classroom', async(inject([HttpTestingController, ClassroomService],
    (httpClient: HttpTestingController, classroomService: ClassroomService) => {
      const classroom = {
        id: 4,
        name: "Tầng 2 TT04",
        capacity: 30
      };
      classroomService.createClassroom(classroom).subscribe(newClassroom => {
        expect(newClassroom).toEqual(classroom);
      });
      let req = httpMock.expectOne(API_URL + '/classrooms');
      expect(req.request.method).toBe('POST');
      req.flush(classroom);
    })));

  it('should PUT and return this classroom after updated', async(inject([HttpTestingController, ClassroomService],
    (httpClient: HttpTestingController, classroomService: ClassroomService) => {
      const classroom = {
        id: 3,
        name: "Tầng 2 TT04",
        capacity: 30
      };
      classroomService.updateClassroom(3, classroom).subscribe(newClassroom => {
        expect(newClassroom).toEqual(classroom);
      });
      let req = httpMock.expectOne(API_URL + '/classrooms/3');
      expect(req.request.method).toBe('PUT');
      req.flush(classroom);
    })))
  afterEach(() => {
    httpMock.verify();
  })
});
