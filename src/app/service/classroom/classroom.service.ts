import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Classroom} from "../../interface/classroom";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) {
  }

  getAllClassroom(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(API_URL + '/classrooms');
  }

  createClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(API_URL + '/classrooms', classroom);
  }

  getClassroom(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(API_URL + `/classrooms/${id}`)
  }

  updateClassroom(id: number, classroom: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(API_URL + `/classrooms/${id}`, classroom)
  }

  deleteClassroom(id: number): Observable<Classroom> {
    return this.http.delete<Classroom>(API_URL + `/classrooms/${id}`);
  }
}
