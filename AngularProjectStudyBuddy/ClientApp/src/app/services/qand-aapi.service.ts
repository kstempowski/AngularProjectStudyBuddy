import { QandA } from './../models/QandA';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QandAApiService {

  apiUri: string ="";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUri: string) {

    this.apiUri = `${baseUri}api/StudyBuddy`
  }

  getAllQuestions() {
    return this.http.get<QandA[]>(this.apiUri);
  }

  getQbyId(id: number) {
    return this.http.get<QandA>(`${this.apiUri}/${id}`);
  }

  getQbyUser(user: string) {
    return this.http.get<QandA>(`${this.apiUri}/${user}`)
  }


  addQandA(question: QandA) {
    return this.http.post<QandA>(`${this.apiUri}`, {"Question":question.Question, "Answer":question.Answer})
  }

  deleteQ(id: number) {
    return this.http.delete(`${this.apiUri}/${id}`)
  }

}


