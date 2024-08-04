import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private http:HttpClient) { }

  baseUrl: any = 'https://examportal-sb.up.railway.app';

  getCategories(){
    return this.http.get(`${this.baseUrl}/category/`);
  }

  addCategory(category: any){
    return this.http.post(`${this.baseUrl}/category/`,category);
  }

  deleteCategory(id: any){
    return this.http.delete(`${this.baseUrl}/category/${id}`);
  }

  updateCategory(category:any){
    return this.http.put('http://localhost:8080/category/',category);
  }

  getCategory(id:any){
    return this.http.get(`${this.baseUrl}/category/${id}`);
  }
}
