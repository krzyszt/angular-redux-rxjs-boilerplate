import { Component, OnInit } from '@angular/core';
import { AuthActions } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private authActions: AuthActions) { }

  ngOnInit() {
  }

  onLogin() {
    this.authActions.login({ user: 'admin', password: 'admin'});
  }

}
