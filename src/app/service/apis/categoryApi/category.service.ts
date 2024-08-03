import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get('http://localhost:8080/category/');
  }

  addCategory(category: any){
    return this.http.post('http://localhost:8080/category/',category);
  }

  deleteCategory(id: any){
    return this.http.delete('http://localhost:8080/category/'+id);
  }

  updateCategory(category:any){
    return this.http.put('http://localhost:8080/category/',category);
  }

  getCategory(id:any){
    return this.http.get('http://localhost:8080/category/'+id);
  }
}
