import { Pipe, PipeTransform } from '@angular/core';
import { RockType, SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'spriteEarthSelector'
})
export class SpriteEarthSelectorPipe implements PipeTransform {

  transform(tile: Tile): number {
    let darkbrown = (1-1)*32;
    let gray = (2-1)*32;
    let lightbrown = (3-1)*32;
    let yellow = (4-1)*32;
    let red = (5-1)*32;
    let river = (7-1)*32;
    let water = (15-1)*32;

    switch (tile.surfaceType) {
      case SurfaceType.OCEAN:
      case SurfaceType.SEA:
      case SurfaceType.COASTAL:
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        switch (tile.rockType) {
          case RockType.BASALT:
            return lightbrown;
          case RockType.BROWNSTONE:
            return darkbrown;
          case RockType.CHALK:
            return gray;
          case RockType.GRANITE:
            return gray;
          case RockType.ORANGE_SANDSTONE:
            return yellow;
          case RockType.QUARTZ:
            return gray;
          case RockType.RED_SANDSTONE:
            return red;
        }

      case SurfaceType.HILL:
        switch (tile.rockType) {
          case RockType.BASALT:
            return lightbrown;
          case RockType.BROWNSTONE:
            return darkbrown;
          case RockType.CHALK:
            return gray;
          case RockType.GRANITE:
            return gray;
          case RockType.ORANGE_SANDSTONE:
            return yellow;
          case RockType.QUARTZ:
            return gray;
          case RockType.RED_SANDSTONE:
            return red;
        }

      case SurfaceType.MOUNTAIN:
        switch (tile.rockType) {
          case RockType.BASALT:
            return lightbrown;
          case RockType.BROWNSTONE:
            return darkbrown;
          case RockType.CHALK:
            return gray;
          case RockType.GRANITE:
            return gray;
          case RockType.ORANGE_SANDSTONE:
            return yellow;
          case RockType.QUARTZ:
            return gray;
          case RockType.RED_SANDSTONE:
            return red;
        }
    }
    
    return gray;
  }
}
