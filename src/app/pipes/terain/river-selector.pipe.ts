import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'riverSelector'
})
export class RiverSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch(tile.surfaceType){
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
        return 'terrain/water/water_sea'
      case SurfaceType.PLAIN:
        return 'terrain/plain/plain_river'
      case SurfaceType.HILL:
        return 'terrain/hill/hill_river'
      case SurfaceType.MOUNTAIN:
        return 'terrain/mountain/mountain_river'
    }
    return '';
  }

}
