import { Pipe, PipeTransform } from '@angular/core';
import { CoordinateHolder, Holder } from '../shared/models/coordinateholder';
import { Coordinate } from '../shared/models/world';

@Pipe({
  name: 'coordinateSelector'
})
export class CoordinateSelectorPipe implements PipeTransform {

  transform(coordinateHolder: CoordinateHolder, xCoord: Object, yCoord: Object): Holder {
    return coordinateHolder.coordinates[xCoord as number][yCoord as number];
  }

}
