import { Component } from '@angular/core';
import { toUnicode } from 'punycode';

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

  todos = [];

  todoValue;

  newtodo(inputElement) {
    // 查看event 屬性
    // console.log(event);

    // push 加入迴圈
    this.todos.push({
      isCompleted: false,
      value: this.todoValue,
    });

    console.log(this.todos);
  }
}
