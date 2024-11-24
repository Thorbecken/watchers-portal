import { Pipe, PipeTransform } from '@angular/core';
import { CoordinateHolder } from '../modules/main/world-page-background/world-page-background.component';

@Pipe({
  name: 'mapPipe'
})
export class MapPipe implements PipeTransform {


  transform(incomingColumn: Map<number, CoordinateHolder>): CoordinateHolder[] {
    let coordinateRow: CoordinateHolder[] = [];
    for(let x = 1; x <= incomingColumn.size; x++){
      coordinateRow.push(incomingColumn.get(x)!);
    }
    return coordinateRow;
  }

}
