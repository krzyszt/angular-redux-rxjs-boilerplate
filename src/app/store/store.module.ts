import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { IAppStore } from './IAppStore';
import { rootReducer } from './reducers/root.reducer';
import { RootEpic } from './epics/root.epic';
import { AuthActions } from './actions/auth.actions';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [
    NgReduxRouter,
    RootEpic,
    AuthActions
  ],
  declarations: []
})
export class StoreModule {
  constructor( store: NgRedux<IAppStore>,
               devTools: DevToolsExtension,
               ngReduxRouter: NgReduxRouter,
               rootEpics: RootEpic ) {

    // Tell Redux about our reducers and epics. If the Redux DevTools chrome extension is available in the browser,
    // tell Redux about it too.
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), createEpicMiddleware(rootEpics.createEpics())],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
