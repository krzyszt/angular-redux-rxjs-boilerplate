import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthActions } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  constructor(private authActions: AuthActions, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authActions.login({ user: 'admin', password: 'admin'});
    this.router.navigate(['/app']);
  }

}
