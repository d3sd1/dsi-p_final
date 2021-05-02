import {ChangeDetectorRef, Component} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {LoginService} from './login.service';
import {NbAuthService} from '@nebular/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent extends NbLoginComponent {

  async login() {
    setTimeout(async () => {
      await this.router.navigateByUrl('/pages/dashboard');
    }, 1000);
  }
}
