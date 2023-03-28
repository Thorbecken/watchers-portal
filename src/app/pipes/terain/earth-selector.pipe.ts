import { Pipe, PipeTransform } from '@angular/core';
import { RockType, SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'earthSelector'
})
export class EarthSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch (tile.surfaceType) {
      case SurfaceType.OCEAN:
      case SurfaceType.SEA:
      case SurfaceType.COASTAL:
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        switch (tile.rockType) {
          case RockType.BASALT:
            return 'terrain/plain/plain_earth_lightbrown';
          case RockType.BROWNSTONE:
            return 'terrain/plain/plain_earth_darkbrown';
          case RockType.CHALK:
            return 'terrain/plain/plain_earth_grey';
          case RockType.GRANITE:
            return 'terrain/plain/plain_earth_grey';
          case RockType.ORANGE_SANDSTONE:
            return 'terrain/plain/plain_earth_orange';
          case RockType.QUARTZ:
            return 'terrain/plain/plain_earth_grey';
          case RockType.RED_SANDSTONE:
            return 'terrain/plain/plain_earth_red';
        }

      case SurfaceType.HILL:
        switch (tile.rockType) {
          case RockType.BASALT:
            return 'terrain/hill/hill_earth_lightbrown';
          case RockType.BROWNSTONE:
            return 'terrain/hill/hill_earth_darkbrown';
          case RockType.CHALK:
            return 'terrain/hill/hill_earth_grey';
          case RockType.GRANITE:
            return 'terrain/hill/hill_earth_grey';
          case RockType.ORANGE_SANDSTONE:
            return 'terrain/hill/hill_earth_orange';
          case RockType.QUARTZ:
            return 'terrain/hill/hill_earth_grey';
          case RockType.RED_SANDSTONE:
            return 'terrain/hill/hill_earth_red';
        }

      case SurfaceType.MOUNTAIN:
        switch (tile.rockType) {
          case RockType.BASALT:
            return 'terrain/mountain/mountain_earth_lightbrown';
          case RockType.BROWNSTONE:
            return 'terrain/mountain/mountain_earth_darkbrown';
          case RockType.CHALK:
            return 'terrain/mountain/mountain_earth_grey';
          case RockType.GRANITE:
            return 'terrain/mountain/mountain_earth_grey';
          case RockType.ORANGE_SANDSTONE:
            return 'terrain/mountain/mountain_earth_orange';
          case RockType.QUARTZ:
            return 'terrain/mountain/mountain_earth_grey';
          case RockType.RED_SANDSTONE:
            return 'terrain/mountain/mountain_earth_red';
        }
    }
    return '';
  }
}
