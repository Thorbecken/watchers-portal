import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate } from '../shared/models/world';

@Pipe({
  name: 'plantBiomassSelector'
})
export class PlantBiomassColoringPipe implements PipeTransform {

  transform(coordinate: Coordinate): string {
    let prefix: string = 'color/color-';
    let biomass = coordinate.tile.biome.grassBiomass + coordinate.tile.biome.treeBiomass;
    if (biomass > 36)
    return prefix + '15';
    if (biomass > 32)
    return prefix + '14';
    if (biomass > 28)
    return prefix + '13';
    if (biomass > 24)
    return prefix + '12';
    if (biomass > 20)
    return prefix + '10';
    if (biomass > 16)
    return prefix + '9';
    if (biomass > 12)
    return prefix + '8';
    if (biomass > 8)
    return prefix + '7';
    if (biomass > 4)
    return prefix + '6';
    if (biomass > 1)
    return prefix + '5';
    return 'color/blank';
  }
}
