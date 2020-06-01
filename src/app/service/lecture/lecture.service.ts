import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lecture} from "../../interface/lecture";
import {Classes} from "../../interface/classes";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  constructor(private http: HttpClient) {
  }

  getAllLecture(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(API_URL + '/lectures');
  }

  createLecture(lecture: Lecture): Observable<Lecture> {
    return this.http.post<Lecture>(API_URL + '/lectures', lecture);
  }

  getLecture(id: number): Observable<Lecture> {
    return this.http.get<Lecture>(API_URL + `/lectures/${id}`)
  }

  updateLecture(id: number, lecture: Lecture): Observable<Lecture> {
    return this.http.put<Lecture>(API_URL + `/lectures/${id}`, lecture)
  }

  deleteLecture(id: number): Observable<Lecture> {
    return this.http.delete<Lecture>(API_URL + `/lectures/${id}`);
  }

  findAllByJob(id: number): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(API_URL + `/jobs/${id}/lectures`);
  }

  findAllByLanguage(id: number): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(API_URL + `/languages/${id}/lectures`);
  }

  findAllClassesByInstructor(id: number): Observable<Classes[]> {
    return this.http.get<Classes[]>(API_URL + `/lectures/${id}/instructor/classes`);
  }

  findAllClassesByCoach(id: number): Observable<Classes[]> {
    return this.http.get<Classes[]>(API_URL + `/lectures/${id}/coach/classes`);
  }
}
