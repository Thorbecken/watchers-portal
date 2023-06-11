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
      case SurfaceType.COASTAL: switch (tile.biome.treeFlora) {
        case 'CORAL': return 'terrain/water/coral';
        case 'KELP': return 'terrain/water/kelp';
        default: return 'terrain/water/kelp';
      }
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        switch (tile.biome.treeFlora) {
          case 'PINE_TREE': return 'terrain/plain/plain_tree_pine';
          case 'LEAF_TREE': return 'terrain/plain/plain_tree_leaf';
          case 'PALM_TREE': return 'terrain/plain/plain_tree_palm';
          case 'SAKURA_TREE': return 'terrain/plain/plain_tree_sakura';
          case 'WISTERIA_TREE': return 'terrain/plain/plain_tree_wisteria';
          case 'JACARANDA_TREE': return 'terrain/plain/plain_tree_jacaranda';
          default: return 'terrain/plain/plain_tree_leaf';
        }
      case SurfaceType.HILL:
        switch (tile.biome.treeFlora) {
          case 'PINE_TREE': return 'terrain/hill/hill_tree_pine';
          case 'LEAF_TREE': return 'terrain/hill/hill_tree_leaf';
          case 'PALM_TREE': return 'terrain/hill/hill_tree_palm';
          case 'SAKURA_TREE': return 'terrain/hill/hill_tree_sakura';
          case 'WISTERIA_TREE': return 'terrain/hill/hill_tree_wisteria';
          case 'JACARANDA_TREE': return 'terrain/hill/hill_tree_jacaranda';
          default: return 'terrain/hill/hill_tree_leaf';;
        }
      case SurfaceType.MOUNTAIN:
        switch (tile.biome.treeFlora) {
          case 'PINE_TREE': return 'terrain/mountain/mountain_tree_pine';
          case 'LEAF_TREE': return 'terrain/mountain/mountain_tree_leaf';
          case 'PALM_TREE': return 'terrain/mountain/mountain_tree_palm';
          case 'SAKURA_TREE': return 'terrain/mountain/mountain_tree_sakura';
          case 'WISTERIA_TREE': return 'terrain/mountain/mountain_tree_wisteria';
          case 'JACARANDA_TREE': return 'terrain/mountain/mountain_tree_jacaranda';
          default: return 'terrain/mountain/mountain_tree_leaf';
        }
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
        switch (tile.biome.treeFlora) {
          case 'PINE_TREE': return 'terrain/plain/plain_tree_pine';
          case 'LEAF_TREE': return 'terrain/plain/plain_tree_leaf';
          case 'PALM_TREE': return 'terrain/plain/plain_tree_palm';
          case 'SAKURA_TREE': return 'terrain/plain/plain_tree_sakura';
          case 'WESTERIA_TREE': return 'terrain/plain/plain_tree_wisteria';
          case 'JACARANDA_TREE': return 'terrain/plain/plain_tree_jacaranda';
          default: return 'terrain/plain/plain_tree_leaf';
        }
    }
  }

}
