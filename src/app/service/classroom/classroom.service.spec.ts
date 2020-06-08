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
    })))
  afterEach(() => {
    httpMock.verify();
  })
});
