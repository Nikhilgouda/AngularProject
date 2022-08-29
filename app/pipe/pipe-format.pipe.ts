import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormat'
})
export class PipeFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
