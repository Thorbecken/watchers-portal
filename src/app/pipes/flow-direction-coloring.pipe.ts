import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate, Direction } from '../shared/models/world';

@Pipe({
  name: 'flowDirectionColoring'
})
export class FlowDirectionColoringPipe implements PipeTransform {

  transform(coordinate: Coordinate): string {
    let prefix: string = 'directions/';
    switch(coordinate.tile.flowDirection){    
      case 'UP': return prefix + 'up';
      case 'RIGHT': return prefix + 'right';
      case 'LEFT': return prefix + 'left';
      case 'DOWN': return prefix + 'down';
      default:
        return 'color/blank';
    }
  }

}
