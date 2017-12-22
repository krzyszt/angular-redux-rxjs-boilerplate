import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AppContainerComponent } from './app-container.component';
import { AuthActions } from '../../../store/actions/auth.actions';

class RouterStub {
  navigate(url: string) { return url; }
}

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;
  const authActionsStub = {
    authenticated: true,
    user: { name: 'Test User'}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainerComponent ],
      providers:    [
        { provide: AuthActions, useValue: authActionsStub },
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
