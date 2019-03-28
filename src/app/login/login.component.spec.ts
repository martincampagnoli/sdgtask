import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initalize the form empty', () => {
    expect(component.loginForm.value.username).toEqual('');
    expect(component.loginForm.value.password).toEqual('');

  });
  it('should call the login function if the login button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.fourth');
    button.click();
    expect(component.submitted).toBeTruthy();
  });
  it('should display a message if username is empty after login button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.fourth');
    button.click();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.missing-username').textContent).toContain('Username is required : try mjean');
  });
  it('should display a message if password is empty after login button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.fourth');
    button.click();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.missing-password').textContent).toContain('Password is required : try password@123');
  });




});
