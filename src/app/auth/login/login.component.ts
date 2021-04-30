import {ChangeDetectorRef, Component} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {LoginService} from './login.service';
import {NbAuthService} from '@nebular/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {

  async doLoginA() {
    setTimeout(async () => {
      await this.router.navigateByUrl('pages/dashboard');
    }, 3000);
  }
}
