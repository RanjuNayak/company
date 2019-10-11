import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindataService } from '../logindata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private fb: FormBuilder,private _userdata: LogindataService,private _router: Router) { }

  ngOnInit() {
  this.login = this.fb.group({
  user_email: new FormControl(),
  user_password: new FormControl()
  });
  }
  // backclick()
  // {
  // this._router.navigate(['/home']);
  // }

  onLoginSubmit() {
  this._userdata.login(
  this.login.value.user_email,
  this.login.value.user_password
  );

  this._router.navigate(['/Company']);
  }
  }
