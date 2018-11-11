import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  todos = [];

  constructor() {}

  completefilter(): any {
    this.todos = this.todos.filter(x => x.isCompleted === true);
  }

  newTodo(todo) {
    this.todos.push({
      isCompleted: true,
      value: todo,
    });
  }

  toggleComplete(todo) {
    todo.isCompleted = !todo.isCompleted;
  }
  remove(idx, todo) {
    this.todos.splice(idx, 1);

    // 方法2
    // this.todos = this.todos.filter(_todo => _todo !== _todo);
  }
}
