import { DataService } from './data.service';
import { Component } from '@angular/core';
import { toUnicode } from 'punycode';
import { isComponent } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  appTitle = '練習Todo';
  placeholderText = '練習placeholder';
  background = 'blue';

  todoValue;

  get todos() {
    return this.dataService.todos;
  }

  constructor(protected dataService: DataService) {}

  newtodo(inputElement) {
    // 查看event 屬性
    // console.log(event);

    // push 加入迴圈
    //   this.todos.push({
    //     isCompleted: true,
    //     value: this.todoValue,
    //   });
    //   this.todoValue = '';
    // }
    this.dataService.newTodo(this.todoValue);
    this.todoValue = '';
  }

  toggleComplete(todo) {
    this.dataService.toggleComplete(todo);
  }
  remove(idx, todo) {
    this.dataService.remove(idx, todo);
  }

  completefilter() {
    this.dataService.completefilter();
  }
}
