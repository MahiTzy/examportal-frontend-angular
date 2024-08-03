import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/apis/categoryApi/category.service';

@Component({
  selector: 'app-quiz-categories',
  templateUrl: './quiz-categories.component.html',
  styleUrls: ['./quiz-categories.component.css']
})
export class QuizCategoriesComponent implements OnInit {

  constructor(private _category:CategoryService) { }

  categories: any = [];

  ngOnInit() {
    this._category.getCategories().subscribe((data)=>{
      this.categories = data;
    })
  }

}
