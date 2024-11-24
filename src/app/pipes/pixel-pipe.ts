import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pixelPipe'
})
export class PixelPipe implements PipeTransform {

  transform(number: number): string {
    return '-' + number + 'px';
  }

}
