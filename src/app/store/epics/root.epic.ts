import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { loginEpic, onLoginSucceededEpic } from './auth.epic';

@Injectable()
export class RootEpic {
  constructor() {}

  public createEpics() {
      return combineEpics(
        loginEpic,
        onLoginSucceededEpic
      );
  }
}
