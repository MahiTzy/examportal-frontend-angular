import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuizzes() {
    return this.http.get('http://localhost:8080/quiz/');
  }

  addQuiz(quiz: any) {
    return this.http.post('http://localhost:8080/quiz/', quiz);
  }

  deleteQuiz(qid: any) {
    return this.http.delete('http://localhost:8080/quiz/' + qid);
  }

  getQuiz(qid: any) {
    return this.http.get('http://localhost:8080/quiz/' + qid);
  }

  updateQuiz(quiz: any) {
    return this.http.put('http://localhost:8080/quiz/', quiz);
  }

  getQuizOfcategory(cid: any) {
    return this.http.get('http://localhost:8080/quiz/category/' + cid);
  }

  getActiveQuizzes(){
    return this.http.get('http://localhost:8080/quiz/active');
  }

  getActiveQuizzesOfCategory(cid: any){
    return this.http.get('http://localhost:8080/quiz/category/active/'+cid);
  }
}
