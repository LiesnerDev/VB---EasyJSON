import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../services/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoServiceSpy: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TodoService', ['getTodos']);
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        { provide: TodoService, useValue: spy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    todoServiceSpy = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    const fakeTodos = ['Task 1', 'Task 2'];
    todoServiceSpy.getTodos.and.returnValue(fakeTodos);

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load todos from the TodoService on initialization', () => {
    expect(component.todos).toEqual(['Task 1', 'Task 2']);
  });

  it('should render the todos in the template', () => {
    const compiled = fixture.nativeElement;
    const liElements = compiled.querySelectorAll('li');
    expect(liElements.length).toBe(2);
    expect(liElements[0].textContent).toContain('Task 1');
    expect(liElements[1].textContent).toContain('Task 2');
  });
});
