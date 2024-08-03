import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../service/apis/loginApi/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private login:LoginService) {}
  faArrowLeft = faArrowLeft;
  user: any={};
  ngOnInit() {
    this.user = this.login.getUser();
    // console.log(this.user);
  }
}
