import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { AuthGuard } from './auth-guard.service';
import { AppContainerComponent } from './components/organisms/app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
