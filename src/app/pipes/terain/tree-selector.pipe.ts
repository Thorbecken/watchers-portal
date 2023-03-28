import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'treeSelector'
})
export class TreeSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch (tile.surfaceType) {
      case SurfaceType.PLAIN:
        return 'terrain/plain/plain_tree_leaf';
      case SurfaceType.HILL:
        return 'terrain/hill/hill_tree_leaf';
      case SurfaceType.MOUNTAIN:
        return 'terrain/mountain/mountain_tree_leaf';
    }
    return '';
  }

}
