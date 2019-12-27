import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from '../shared/models/world';

@Pipe({
  name: 'imageSelector'
})
export class ImageSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch(tile.surfaceType) {
    case SurfaceType.CONTINENTAL:
      return 'grassFiller';
    case SurfaceType.OCEANIC:
      return 'OceanFiller';
    }
    return null;
  }

}
