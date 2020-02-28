import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  successMessage: string;
  constructor(private authService: AuthServiceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfPassword: new FormControl(null, this.passwordValidator)
    });

    this.registerForm.controls.password.valueChanges
    .subscribe(
      x => this.registerForm.controls.cnfPassword.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }
  passwordValidator(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
      const cnfPassword = control.value;

      const passwordControl = control.root.get('password');
      if(passwordControl) {
        const passwordValue = passwordControl.value;
        if(passwordValue !== cnfPassword || passwordValue === '') {
          return { isError: true };
        }
      }
    }
    return null;
  }

  formValid() {
    return this.registerForm.valid;
  }

  moveToLogin() {
    // this._router.navigate(['../login'], {relativeTo: this._activatedRoute});
  }

  register() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);
    this.authService.submitRegister(this.registerForm.value)
    .subscribe(
      (data) => {
        this.successMessage = 'Registered Successfully'
      },
      (error) => {
        this.successMessage = 'Error Occurred'
      }
    );
  }

}
