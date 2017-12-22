import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthActions } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.less']
})
export class AppContainerComponent implements OnInit {

  constructor(private authActions: AuthActions, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authActions.logout();
    this.router.navigate(['/login']);
  }
}
