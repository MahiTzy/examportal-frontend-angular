import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/apis/loginApi/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }
  isLoggedIn = false;
  user: any = null;

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.loginService.getUser();
    }
    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      if (this.isLoggedIn) {
        this.user = this.loginService.getUser();
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.user = null;
    this.router.navigate(['login']);
  }

}
