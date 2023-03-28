import { Pipe, PipeTransform } from '@angular/core';
import { Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'snowSelector'
})
export class SnowSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    return '';
  }

}
