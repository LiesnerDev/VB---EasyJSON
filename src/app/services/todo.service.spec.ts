import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  const TODO_KEY = 'todoItems';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    localStorage.clear();
  });

  it('should return an empty array when there are no todo items in localStorage', () => {
    expect(service.getTodos()).toEqual([]);
  });

  it('should return the parsed todo items from localStorage when available', () => {
    const fakeTodos = ['Item 1', 'Item 2'];
    localStorage.setItem(TODO_KEY, JSON.stringify(fakeTodos));
    expect(service.getTodos()).toEqual(fakeTodos);
  });
});
