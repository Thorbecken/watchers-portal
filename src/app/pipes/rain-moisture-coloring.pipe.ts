import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate } from '../shared/models/world';

@Pipe({
  name: 'rainMoistureColoring'
})
export class RainMoistureColoringPipe implements PipeTransform {

  transform(coordinate: Coordinate): string {
    let prefix: string = 'color/color-';
    let moisture = coordinate.tile.rainfall;
    if (moisture > 10)
    return prefix + '15';
    if (moisture > 9)
    return prefix + '14';
    if (moisture > 8)
    return prefix + '13';
    if (moisture > 7)
    return prefix + '12';
    if (moisture > 6)
    return prefix + '10';
    if (moisture > 5)
    return prefix + '9';
    if (moisture > 4)
    return prefix + '8';
    if (moisture > 3)
    return prefix + '7';
    if (moisture > 2)
    return prefix + '6';
    if (moisture > 1)
    return prefix + '5';
    return 'color/blank';
  }
}
