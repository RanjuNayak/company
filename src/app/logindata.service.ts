import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  currentUser;
  login(user_email: string, user_password: string) {
  if (user_email == "admin" && user_password == "1234") {
  this.currentUser = {
  user_email: user_email,
  password: user_password,
  isAdmin: true
  };
  return;
  }
  this.currentUser = {
  user_email: user_email,
  password: user_password,
  isAdmin: false
  };
  }
  }

