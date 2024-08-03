import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  // get questions by quiz id
  public getQuestionsOfQuiz(qid: any){
    return this.http.get(`http://localhost:8080/question/quiz/all/${qid}`);
  }

  // get questions by quiz id for exam
  public getQuestionsOfQuizForExam(qid:any){
    return this.http.get(`http://localhost:8080/question/quiz/${qid}`);
  }

  // delete question
  deleteQuestion(quesId: any){
    return this.http.delete(`http://localhost:8080/question/${quesId}`)
  }

  // add question
  addQuestion(question: any){
    return this.http.post('http://localhost:8080/question/', question);
  }

  // update question
  updateQuestion(question: any){
    return this.http.put('http://localhost:8080/question/', question);
  }

  // get question by id
  getQuestion(quesId: any){
    return this.http.get(`http://localhost:8080/question/${quesId}`);
  }

  // evaluate quiz
  submitQuiz(questions: any){
    return this.http.post('http://localhost:8080/question/quiz/evaluate', questions);
  }
}
