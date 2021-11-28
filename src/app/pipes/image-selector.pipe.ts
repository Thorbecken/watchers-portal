import { Pipe, PipeTransform } from '@angular/core';
import { BiomeTypeEnum, SurfaceType, Tile } from '../shared/models/world';

@Pipe({
  name: 'imageSelector'
})
export class ImageSelectorPipe implements PipeTransform {

  transform(tile: Tile): string {
    switch(tile.biome.biomeTypeEnum) {
      case BiomeTypeEnum.OCEAN:
        return 'terrain/water/Water_ocean';
      case BiomeTypeEnum.SEA:
        return 'terrain/water/Water_sea';
      case BiomeTypeEnum.COASTAL:
        return 'terrain/water/Water_coastal';


      case BiomeTypeEnum.POLAR_MOUNTAIN_DESERT:
        return 'terrain/cold/Cold_mountain_desert';
      case BiomeTypeEnum.POLAR_MOUNTAIN_TUNDRA:
        return 'terrain/cold/Cold_mountain_tundra';
      case BiomeTypeEnum.POLAR_MOUNTAIN_TAIGA:
        return 'terrain/cold/Cold_mountain_taiga';

      case BiomeTypeEnum.POLAR_HILL_DESERT:
        return 'terrain/cold/Cold_hill_desert';
      case BiomeTypeEnum.POLAR_HILL_TUNDRA:
        return 'terrain/cold/Cold_hill_tundra';
      case BiomeTypeEnum.POLAR_HILL_TAIGA:
        return 'terrain/cold/Cold_hill_taiga';

      case BiomeTypeEnum.POLAR_PLAIN_DESERT:
        return 'terrain/cold/Cold_plain_desert';
      case BiomeTypeEnum.POLAR_PLAIN_TUNDRA:
        return 'terrain/cold/Cold_plain_tundra';
      case BiomeTypeEnum.POLAR_PLAIN_TAIGA:
        return 'terrain/cold/Cold_plain_taiga';


      case BiomeTypeEnum.TEMPERATAE_MOUNTAIN_DESERT:
        return 'terrain/temperate/Temperate_mountain_desert';
      case BiomeTypeEnum.TEMPERATE_MOUNTAIN_GRASSLAND:
        return 'terrain/temperate/Temperate_mountain_grassland';
      case BiomeTypeEnum.TEMPERATE_MOUNTAIN_FOREST:
        return 'terrain/temperate/Temperate_mountain_forest';

      case BiomeTypeEnum.TEMPERATE_HILL_DESERT:
        return 'terrain/temperate/Temperate_hill_desert';
      case BiomeTypeEnum.TEMPERATE_HILL_GRASSLAND:
        return 'terrain/temperate/Temperate_hill_grassland';
      case BiomeTypeEnum.TEMPERATE_HILL_FOREST:
        return 'terrain/temperate/Temperate_hill_forest';

      case BiomeTypeEnum.TEMPERATE_PLAIN_DESERT:
        return 'terrain/temperate/Temperate_plain_desert';
      case BiomeTypeEnum.TEMPERATE_PLAIN_GRASSLAND:
        return 'terrain/temperate/Temperate_plain_grassland';
      case BiomeTypeEnum.TEMPERATE_PLAIN_FOREST:
        return 'terrain/temperate/Temperate_plain_forest';


      case BiomeTypeEnum.TROPICAL_MOUNTAIN_DESERT:
        return 'terrain/hot/Hot_mountain_desert';
      case BiomeTypeEnum.TROPICAL_MOUNTAIN_SAVANAH:
        return 'terrain/hot/Hot_mountain_savanna';
      case BiomeTypeEnum.TROPICAL_MOUNTAIN_JUNGLE:
        return 'terrain/hot/Hot_mountain_jungle';

      case BiomeTypeEnum.TROPICAL_HILL_DESERT:
        return 'terrain/hot/Hot_hill_desert';
      case BiomeTypeEnum.TROPICAL_HILL_SAVANAH:
        return 'terrain/hot/Hot_hill_savanna';
      case BiomeTypeEnum.TROPICAL_HILL_JUNGLE:
        return 'terrain/hot/Hot_hill_jungle';
        
      case BiomeTypeEnum.TROPICAL_PLAIN_DESERT:
        return 'terrain/hot/Hot_plain_desert';
      case BiomeTypeEnum.TROPICAL_PLAIN_SAVANAH:
        return 'terrain/hot/Hot_plain_savanna';
      case BiomeTypeEnum.TROPICAL_PLAIN_JUNGLE:
        return 'terrain/hot/Hot_plain_jungle';
    }
    return '';
  }

  // transform(tile: Tile): string {
  //   switch(tile.surfaceType) {
  //     case SurfaceType.MOUNTAIN:
  //       return 'Mountain';
  //     case SurfaceType.HILL:
  //       return 'Mountain';
  //     case SurfaceType.PLAIN:
  //       return 'grassFiller';
  //     case SurfaceType.COASTAL:
  //       return 'CoastalWater'
  //     case SurfaceType.OCEANIC:
  //       return 'Ocean';
  //     case SurfaceType.DEEP_OCEAN:
  //       return 'DeepOcean';
  //   }
  //   return null;
  // }

}
