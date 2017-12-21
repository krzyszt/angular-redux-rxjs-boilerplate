import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
