import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Language} from "../../interface/language";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {
  }

  getAllLanguage(): Observable<Language[]> {
    return this.http.get<Language[]>(API_URL + '/languages');
  }

  createLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(API_URL + '/languages', language);
  }

  getLanguage(id: number): Observable<Language> {
    return this.http.get<Language>(API_URL + `/languages/${id}`)
  }

  updateLanguage(id: number, language: Language): Observable<Language> {
    return this.http.put<Language>(API_URL + `/languages/${id}`, language)
  }

  deleteLanguage(id: number): Observable<Language> {
    return this.http.delete<Language>(API_URL + `/languages/${id}`);
  }
}
