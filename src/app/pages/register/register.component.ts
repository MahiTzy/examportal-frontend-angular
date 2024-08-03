import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../service/apis/regApi/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private api: ApiService, private snack: MatSnackBar) {}
  user = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  };
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('Fields are required !!', 'cancel', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }
    this.api.createUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Registration Successfull !!', 'cancel', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        const msg = error.error.error || 'An error occurred!';
        this.snack.open(msg, 'cancel', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
