import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: String;
  constructor(private authService: AuthServiceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  formValid() {
    return this.loginForm.valid;
  }

  login() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    
    this.authService.login(this.loginForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', data.toString());
        this.successMessage = 'Registered Successfully';
        console.log("success");
        this._router.navigate(['../home'], {relativeTo: this._activatedRoute});
      },
      (err) => {
        console.log(err.error.message);
      
          this.successMessage = err.error.message;
      }
    );
  }

  moveToRegister() {
    this._router.navigate(['../register'], {relativeTo: this._activatedRoute});
  }
}
