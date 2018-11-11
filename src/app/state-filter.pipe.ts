import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFilter',
})
export class StateFilterPipe implements PipeTransform {
  transform(value: any, state?: any): any {
    if (state === 'active') {
      return value.filter(x => x.isCompleted === true);
    }
    if (state === 'completed') {
      return value.filter(x => x.isCompleted === false);
    }
    return value;
  }
}
