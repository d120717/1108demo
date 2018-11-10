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
  placeholder = '練習placeholder';
  background = 'blue';

  newtodo(inputElement) {
    // 查看event 屬性
    // console.log(event);
    console.log(inputElement.value);
  }
}
