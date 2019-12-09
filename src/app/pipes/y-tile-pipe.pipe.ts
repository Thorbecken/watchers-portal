import { Pipe, PipeTransform } from '@angular/core';
import { Tile } from '../shared/models/world';

@Pipe({
  name: 'yTilePipe'
})
export class YTilePipePipe implements PipeTransform {

  transform(value: Tile, args?: any): any {
    return null;
  }

}
