import { Pipe, PipeTransform } from '@angular/core';
import { CoordinateHolder, WorldHolder } from '../modules/main/world-page-background/world-page-background.component';

@Pipe({
  name: 'columnPipe'
})
export class ColumnPipe implements PipeTransform {

  transform(incomingWorld: WorldHolder): Map<number,CoordinateHolder>[] {
    let coordinateColumn: Map<number, CoordinateHolder>[] = [];
    for(let x = 1; x <= incomingWorld.xSize; x++){
      coordinateColumn.push(incomingWorld.map.get(x)!);
    }
    return coordinateColumn;
  }

}
