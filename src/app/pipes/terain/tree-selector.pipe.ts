import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'treeSelector'
})
export class TreeSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch (tile.surfaceType) {
      case SurfaceType.OCEAN:
      case SurfaceType.SEA:
      case SurfaceType.COASTAL: switch (tile.biome.treeFlora!.name) {
        case 'Coral': return 'terrain/water/coral';
        case 'Kelp': return 'terrain/water/kelp';
        default: return 'terrain/water/kelp';
      }
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return 'terrain/plain/plain_tree_pine';
          case 'Leaf': return 'terrain/plain/plain_tree_leaf';
          case 'Palm': return 'terrain/plain/plain_tree_palm';
          case 'Sakura': return 'terrain/plain/plain_tree_sakura';
          case 'Wisteria': return 'terrain/plain/plain_tree_wisteria';
          case 'Jacaranda': return 'terrain/plain/plain_tree_jacaranda';
          default: return 'terrain/plain/plain_tree_leaf';
        }
      case SurfaceType.HILL:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return 'terrain/hill/hill_tree_pine';
          case 'Leaf': return 'terrain/hill/hill_tree_leaf';
          case 'Palm': return 'terrain/hill/hill_tree_palm';
          case 'Sakura': return 'terrain/hill/hill_tree_sakura';
          case 'Wisteria': return 'terrain/hill/hill_tree_wisteria';
          case 'Jacaranda': return 'terrain/hill/hill_tree_jacaranda';
          default: return 'terrain/hill/hill_tree_leaf';;
        }
      case SurfaceType.MOUNTAIN:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return 'terrain/mountain/mountain_tree_pine';
          case 'Leaf': return 'terrain/mountain/mountain_tree_leaf';
          case 'Palm': return 'terrain/mountain/mountain_tree_palm';
          case 'Sakura': return 'terrain/mountain/mountain_tree_sakura';
          case 'Wisteria': return 'terrain/mountain/mountain_tree_wisteria';
          case 'Jacaranda': return 'terrain/mountain/mountain_tree_jacaranda';
          default: return 'terrain/mountain/mountain_tree_leaf';
        }
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return 'terrain/plain/plain_tree_pine';
          case 'Leaf': return 'terrain/plain/plain_tree_leaf';
          case 'Palm': return 'terrain/plain/plain_tree_palm';
          case 'Sakura': return 'terrain/plain/plain_tree_sakura';
          case 'Wisteria': return 'terrain/plain/plain_tree_wisteria';
          case 'Jacaranda': return 'terrain/plain/plain_tree_jacaranda';
          default: return 'terrain/plain/plain_tree_leaf';
        }
    }
  }

}
