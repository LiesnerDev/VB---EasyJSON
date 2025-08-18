import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUserName', 'setUserName']);

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: UserService, useValue: spy }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements (child components)
    }).compileComponents();

    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should not prompt if username exists', () => {
    userServiceSpy.getUserName.and.returnValue('John');
    spyOn(window, 'prompt');

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    expect(window.prompt).not.toHaveBeenCalled();
    expect(userServiceSpy.setUserName).not.toHaveBeenCalled();
  });

  it('should prompt and set username when not present', () => {
    userServiceSpy.getUserName.and.returnValue('');
    spyOn(window, 'prompt').and.returnValue('Jane');

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    expect(window.prompt).toHaveBeenCalled();
    expect(userServiceSpy.setUserName).toHaveBeenCalledWith('Jane');
  });

  it('should set default username 'User' when prompt returns null', () => {
    userServiceSpy.getUserName.and.returnValue('');
    spyOn(window, 'prompt').and.returnValue(null);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    expect(window.prompt).toHaveBeenCalled();
    expect(userServiceSpy.setUserName).toHaveBeenCalledWith('User');
  });
});
