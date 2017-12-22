import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import * as types from './constants';
import { IAppStore } from '../IAppStore';

@Injectable()
export class AuthActions {
  constructor(private store: NgRedux<IAppStore>) {}

  login(payload) {
    this.store.dispatch({
      type: types.LOGIN_STARTED,
      payload
    });
  }

  logout() {
    this.store.dispatch({
      type: types.LOGOUT
    });
  }
}
