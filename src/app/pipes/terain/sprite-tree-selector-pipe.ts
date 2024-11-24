import { Pipe, PipeTransform } from '@angular/core';
import { SurfaceType, Tile } from 'src/app/shared/models/world';

@Pipe({
  name: 'spriteTreeSelector'
})
export class SpriteTreeSelectorPipe implements PipeTransform {

  transform(tile: Tile): number {
    let plain_jacaranda = (9-1)*32;
    let plain_leaf = (10-1)*32;
    let plain_palm = (11-1)*32;
    let plain_pine = (12-1)*32;
    let plain_sakura = (13-1)*32;
    let plain_wisteria = (14-1)*32;
    
    let hill_jacaranda = (9-1)*32;
    let hill_leaf = (11-1)*32;
    let hill_palm = (12-1)*32;
    let hill_pine = (13-1)*32;
    let hill_sakura = (10-1)*32;
    let hill_wisteria = (14-1)*32;
    
    let mountain_jacaranda = (9-1)*32;
    let mountain_leaf = (10-1)*32;
    let mountain_palm = (11-1)*32;
    let mountain_pine = (12-1)*32;
    let mountain_sakura = (13-1)*32;
    let mountain_wisteria = (14-1)*32;
    
    let water_kelp = (2-1)*32;
    let water_coral = (1-1)*32;

    switch (tile.surfaceType) {
      case SurfaceType.OCEAN:
      case SurfaceType.SEA:
      case SurfaceType.COASTAL: switch (tile.biome.treeFlora!.name) {
        case 'Coral': return water_coral;
        case 'Kelp': return water_kelp;
        default: return water_kelp;
      }
      case SurfaceType.LAKE:
      case SurfaceType.LARGE_RIVER:
      case SurfaceType.PLAIN:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return plain_pine;
          case 'Leaf': return plain_leaf;
          case 'Palm': return plain_palm;
          case 'Sakura': return plain_sakura;
          case 'Wisteria': return plain_wisteria;
          case 'Jacaranda': return plain_jacaranda;
          default: return plain_leaf;
        }
      case SurfaceType.HILL:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return hill_pine;
          case 'Leaf': return hill_leaf;
          case 'Palm': return hill_palm;
          case 'Sakura': return hill_sakura;
          case 'Wisteria': return hill_wisteria;
          case 'Jacaranda': return hill_jacaranda;
          default: return hill_leaf;
        }
      case SurfaceType.MOUNTAIN:
        switch (tile.biome.treeFlora!.name) {
          case 'Pine': return mountain_pine;
          case 'Leaf': return mountain_leaf;
          case 'Palm': return mountain_palm;
          case 'Sakura': return mountain_sakura;
          case 'Wisteria': return mountain_wisteria;
          case 'Jacaranda': return mountain_jacaranda;
          default: return mountain_leaf;
        }
    }
  }

}
