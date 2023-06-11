import { Pipe, PipeTransform } from '@angular/core';
import { Tile, SurfaceType } from 'src/app/shared/models/world';

@Pipe({
  name: 'snowSelector'
})
export class SnowSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch(tile.surfaceType){
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.LAKE:
      case SurfaceType.PLAIN:
        return 'terrain/plain/plain_snow'
      case SurfaceType.HILL:
        return 'terrain/hill/hill_snow'
      case SurfaceType.MOUNTAIN:
        return 'terrain/mountain/mountain_snow'
    }
    return '';
  }

}
