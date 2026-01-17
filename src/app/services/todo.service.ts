import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private TODO_KEY = 'todoItems';

  getTodos(): string[] {
    const todos = localStorage.getItem(this.TODO_KEY);
    return todos ? JSON.parse(todos) : [];
  }
}
