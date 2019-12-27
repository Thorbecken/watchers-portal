import { Pipe, PipeTransform } from '@angular/core';
import { Tile, World } from '../shared/models/world';

@Pipe({
  name: 'xColumnPipe'
})
export class XColumnPipePipe implements PipeTransform {

  transform(incomingWorld: World): Tile[][] {

    let xColumns: Tile[][] = [];

    for(let x = 1; x <= incomingWorld.xsize; x++){
      let tileColumn: Tile[] = incomingWorld.tiles.filter(tile => tile.xCoord == x);
      tileColumn.sort((tile1, tile2) => (tile1.yCoord < tile2.yCoord) ? -1 : 1);
      xColumns.push(tileColumn);
    }

    console.log('returning ' + xColumns.length + ' columns with an xSize of ' + incomingWorld.xsize + ' and an ySize of ' + incomingWorld.ysize);

    return xColumns;
  }

}
