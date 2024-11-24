import { Pipe, PipeTransform } from '@angular/core';
import { Tile, SurfaceType } from 'src/app/shared/models/world';

@Pipe({
  name: 'spriteSnowSelector'
})
export class SpriteSnowSelectorPipe implements PipeTransform {

  transform(tile: Tile): number {
    let plain_snow = (8-1)*32;
    let hill_snow = (8-1)*32;
    let mountain_snow = (8-1)*32;

    switch(tile.surfaceType){
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.LAKE:
      case SurfaceType.PLAIN:
        return plain_snow;
      case SurfaceType.HILL:
        return hill_snow;
      case SurfaceType.MOUNTAIN:
        return mountain_snow;
    }
    return plain_snow;
  }

}
