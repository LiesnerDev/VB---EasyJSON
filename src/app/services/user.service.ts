import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_KEY = 'username';

  getUserName(): string {
    return localStorage.getItem(this.USER_KEY) || '';
  }

  setUserName(name: string): void {
    localStorage.setItem(this.USER_KEY, name);
  }
}
