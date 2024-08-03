import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private _http:HttpClient) { }

  public submitQuizResult(quizResult:any){
    return this._http.post('http://localhost:8080/quiz-result/submit',quizResult);
  }

  public getQuizResultForUser(username:any){
    return this._http.get('http://localhost:8080/quiz-result/'+username);
  }

  public getQuizResultForAdmin(qid:any){
    return this._http.get('http://localhost:8080/quiz-result/quiz/'+qid);
  }
}
