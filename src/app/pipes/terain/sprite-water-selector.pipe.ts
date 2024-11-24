import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'spriteWaterSelector'
})
export class SpriteWaterSelectorPipe implements PipeTransform {

  transform(tile: Tile): number {
    let coastal = (3 - 1) * 32;
    let lake = (15 - 1) * 32;
    let ocean = (5 - 1) * 32;
    let sea = (6 - 1) * 32;
    let plain = (7 - 1) * 32;
    let hill = (7 - 1) * 32;
    let mountain = (7 - 1) * 32;

    switch (tile.surfaceType) {
      case SurfaceType.OCEAN:
        return ocean;
      case SurfaceType.SEA:
        return sea;
      case SurfaceType.COASTAL:
        return coastal;
      case SurfaceType.PLAIN:
        return plain;
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
        return lake;
      case SurfaceType.HILL:
        return hill;
      case SurfaceType.MOUNTAIN:
        return mountain;
    }
    return lake;
  }

}
