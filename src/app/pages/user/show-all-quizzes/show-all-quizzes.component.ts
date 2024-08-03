import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-show-all-quizzes',
  templateUrl: './show-all-quizzes.component.html',
  styleUrls: ['./show-all-quizzes.component.css']
})
export class ShowAllQuizzesComponent implements OnInit {

  constructor(private _quiz:QuizService) { }

  quizzes: any = [];

  categories: any = [];

  ngOnInit() {
    this._quiz.getActiveQuizzes().subscribe((data)=>{
      this.quizzes = data;
    })
  }

}
