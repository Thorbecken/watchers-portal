import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'grassSelector'
})
export class GrassSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch (tile.surfaceType) {
      case SurfaceType.PLAIN:
        return 'terrain/plain/plain_grass';
      case SurfaceType.HILL:
        return 'terrain/hill/hill_grass';
      case SurfaceType.MOUNTAIN:
        return 'terrain/mountain/mountain_grass';
    }
    return '';
  }
}
