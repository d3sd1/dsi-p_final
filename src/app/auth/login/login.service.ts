import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  DEFAULT = {
    email: 'admin@motometry.com',
    pass: 'admin',
  };

  constructor() {
  }

  doLogin(email: string, pass: string) {
    return this.DEFAULT.email.toLowerCase() === email.toLowerCase()
      && this.DEFAULT.pass.toLowerCase() === pass.toLowerCase();
  }
}
