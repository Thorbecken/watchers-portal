import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'waterSelector'
})
export class WaterSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch(tile.surfaceType) {
      case SurfaceType.OCEAN:
        return 'terrain/water/water_ocean';
      case SurfaceType.SEA:
        return 'terrain/water/water_sea';
        case SurfaceType.LARGE_RIVER:
      case SurfaceType.LAKE:
      case SurfaceType.COASTAL:
        return 'terrain/water/water_coastal';
    }
    return '';
  }

}
