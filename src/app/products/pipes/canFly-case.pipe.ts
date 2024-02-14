import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyCase'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: string): 'vuela' | 'no vuela' {

    return value ? 'vuela' : 'no vuela';

  }
}
