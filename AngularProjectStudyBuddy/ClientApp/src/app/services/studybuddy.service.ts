import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { QandA } from '../models/QandA';

@Injectable({
  providedIn: 'root'
})
export class StudybuddyService {

  apiUri: string = "";
  QandAs: QandA [] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUri: string) {
    this.apiUri = `${baseUri}api/studybuddy`;
    console.log(this.apiUri);
  }

  //Functions pertaining to QandA

  getAllQandA() {
    return this.http.get<QandA[]>(this.apiUri);
  }

  getQandA(Qid: number) {
    return this.http.get(`${this.apiUri}/${Qid}`);
  }

  addQandA(qa: QandA) {
    return this.http.post<QandA>(`${this.apiUri}`, { "question": qa.Question, "answer": qa.Answer });
  }

  deleteQandA(Qid: number) {
    return this.http.delete(`${this.apiUri}/${Qid}`);
  }
}
