import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = 'https://examportal-sb.up.railway.app';
  constructor(private http: HttpClient) {}
  createUser(user: any) {
    return this.http.post(this.baseUrl + '/', user);
  }
}
