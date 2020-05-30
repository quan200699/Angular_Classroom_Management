import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../interface/job";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  getAllJob(): Observable<Job[]> {
    return this.http.get<Job[]>(API_URL + '/jobs');
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(API_URL + '/jobs', job);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(API_URL + `/jobs/${id}`)
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.http.put<Job>(API_URL + `/jobs/${id}`, job)
  }

  deleteJob(id: number): Observable<Job> {
    return this.http.delete<Job>(API_URL + `/jobs/${id}`);
  }
}
