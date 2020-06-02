import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classes} from "../../interface/classes";
import {Student} from "../../interface/student";
import {Lecture} from "../../interface/lecture";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) {
  }

  getAllClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(API_URL + '/classes');
  }

  createClasses(classes: Classes): Observable<Classes> {
    return this.http.post<Classes>(API_URL + '/classes', classes);
  }

  getClasses(id: number): Observable<Classes> {
    return this.http.get<Classes>(API_URL + `/classes/${id}`)
  }

  updateClasses(id: number, classes: Classes): Observable<Classes> {
    return this.http.put<Classes>(API_URL + `/classes/${id}`, classes)
  }

  deleteClasses(id: number): Observable<Classes> {
    return this.http.delete<Classes>(API_URL + `/classes/${id}`);
  }

  getAllStudentByClass(id: number): Observable<Student[]> {
    return this.http.get<Student[]>(API_URL + `/classes/${id}/students`);
  }

  getAllInstructorHasFreeTime(classTime: string): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(API_URL + `/classes/instructors?classTime=` + classTime);
  }

  getAllTutorHasFreeTime(id: number, classTime: string): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(API_URL + `/classes/${id}/tutors?classTime=` + classTime);
  }
}
