import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate, World } from '../shared/models/world';

@Pipe({
  name: 'xColumnPipe'
})
export class XColumnPipePipe implements PipeTransform {

  transform(incomingWorld: World): Coordinate[][] {

    let xColumns: Coordinate[][] = [];

    for(let x = 1; x <= incomingWorld.xsize; x++){
      let coordinateColumn: Coordinate[] = incomingWorld.coordinates.filter(coordinate => coordinate.xCoord == x);
      coordinateColumn.sort((coordinate1, coordinate2) => (coordinate1.yCoord < coordinate2.yCoord) ? -1 : 1);
      xColumns.push(coordinateColumn);
    }

    console.log('returning ' + xColumns.length + '(' + xColumns[1].length + ' size) columns.');

    return xColumns;
  }

}
