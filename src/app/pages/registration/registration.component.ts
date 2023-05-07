import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    }),
  });

  constructor(
    private location: Location,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService
      .signup(
        this.registrationForm.get('email')?.value,
        this.registrationForm.get('password')?.value
      )
      .then((cred) => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.registrationForm.get('email')?.value,
          username: this.registrationForm.get('email')?.value.split('@')[0],
          name: {
            firstname: this.registrationForm.get('name.firstname')?.value,
            lastname: this.registrationForm.get('name.lastname')?.value,
          },
        };
        this.userService
          .create(user)
          .then((_) => {
            console.log('Sikeres regisztráció.');
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goBack() {
    this.location.back();
  }
}
