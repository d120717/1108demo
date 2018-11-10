import { Component } from '@angular/core';
import { of, Observable, forkJoin } from 'rxjs';
import { tap, map, mergeMap, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  appTitle = 'test';
}

const obs1 = of([1, 2, 3]).pipe(delay(1700));
const obs2 = of([4, 5, 6]).pipe(delay(600));
const obs3 = of([7, 8, 9]).pipe(delay(500));

const displayTime = (message: string) => {
  const now = new Date();
    console.log(
      `${message}: ${now.toLocaleTimeString()}.${now.getMilliseconds()}`);
};

const showTime = (message: string) => (obs: Observable<any>) => obs.pipe(
  tap(x => displayTime(message))
);

displayTime('init sub$');

const sub$ = of([0]).pipe(

  showTime('starting mergeMap'),
  // mergeMap(e => obs2),
  mergeMap(e => forkJoin(obs1, obs2, obs3), (e, res) => {
    console.log(e);
    console.log(res);
    displayTime('end mergeMap');
    return [...e, ...[].concat.apply([], res)];
  }),

  // showTime('end mergeMap'),

  // showTime('starting concatMap'),
  // concatMap(e => obs1, (e, res) => {
  //   console.log([...e, ...res]);
  //   return [...e, ...res];
  // }),
  // showTime('end concatMap'),
);


sub$.subscribe();
