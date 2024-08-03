import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/apis/loginApi/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(public loginService: LoginService, private router: Router) {}

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
