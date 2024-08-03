import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../service/apis/categoryApi/category.service';
import { QuizService } from '../../../service/apis/quizApi/quiz.service';

@Component({
  selector: 'app-show-quizzes',
  templateUrl: './show-quizzes.component.html',
  styleUrls: ['./show-quizzes.component.css']
})
export class ShowQuizzesComponent implements OnInit {

  constructor(private _quiz:QuizService, private _category:CategoryService, private _route:ActivatedRoute) { }

  quizzes: any = [];

  cid = null;


  ngOnInit() {
    this._route.params.subscribe((params)=>{
      this.cid = params['cid'];
      this._quiz.getActiveQuizzesOfCategory(this.cid).subscribe((data)=>{
        // console.log(data);
        this.quizzes = data;
      })
    })
  }

}
