import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const USER_KEY = 'username';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    localStorage.clear();
  });

  it('should return an empty string if no username is stored', () => {
    expect(service.getUserName()).toBe('');
  });

  it('should store and retrieve the username correctly', () => {
    service.setUserName('Bob');
    expect(service.getUserName()).toBe('Bob');
  });
});
