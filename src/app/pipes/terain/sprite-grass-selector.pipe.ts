import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'spriteGrassSelector'
})
export class SpriteGrassSelectorPipe implements PipeTransform {

  transform(tile: Tile): number {
    let plain = (6 - 1) * 32;
    let hill = (6 - 1) * 32;
    let mountain = (6 - 1) * 32;

    switch (tile.surfaceType) {
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        return plain;
      case SurfaceType.HILL:
        return hill;
      case SurfaceType.MOUNTAIN:
        return mountain;
    }
    return plain;
  }
}
