import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate } from '../shared/models/world';

@Pipe({
  name: 'airMoistureColoring'
})
export class AirMoistureColoringPipe implements PipeTransform {

  transform(coordinate: Coordinate): string {
    let prefix: string = 'color/color-';
    let moisture = coordinate.climate.airMoisture;
    if (moisture > 90)
    return prefix + '15';
    if (moisture > 80)
    return prefix + '14';
    if (moisture > 70)
    return prefix + '13';
    if (moisture > 60)
    return prefix + '12';
    if (moisture > 50)
    return prefix + '10';
    if (moisture > 40)
    return prefix + '9';
    if (moisture > 30)
    return prefix + '8';
    if (moisture > 20)
    return prefix + '7';
    if (moisture > 10)
    return prefix + '6';
    if (moisture > 1)
    return prefix + '5';
    return 'color/blank';
  }
}
