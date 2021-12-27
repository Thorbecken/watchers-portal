import { Coordinate, World } from "./world";

export class Holder {
    coordinate: Coordinate;

    constructor(coordinate: Coordinate){
        this.coordinate = coordinate;
    }
}

export class CoordinateHolder {
    coordinates: Holder[][];
    yCoordinates: number[];
    xCoordinates: number[];

    constructor(world: World){
        this.coordinates = [];
        this.yCoordinates = Array<number>(world.xSize);
        this.xCoordinates = Array<number>(world.ySize);

        for(var i: number = 0; i < world.xSize; i++) {
            this.coordinates[i] = [];
            this.xCoordinates[i-1] = i;
            for(var j: number = 0; j < world.ySize; j++) {
                if(i == 0){
                    this.xCoordinates[j-1] = j;
                }
                this.coordinates[i][j].coordinate = new Coordinate();
            }
        }

        world.coordinates.forEach(coordinate => {
            this.coordinates[coordinate.xCoord-1][coordinate.yCoord-1].coordinate = coordinate;
            //console.log(coordinate.yCoord + ', ' + coordinate.xCoord + ' set');
        });
    }

    public refresh(world: World) {
        world.coordinates.forEach(coordinate => this.coordinates[coordinate.xCoord-1][coordinate.yCoord-1].coordinate = coordinate);
    }

    public get(xCoord: number, yCoord: number): Coordinate{
        return this.coordinates[xCoord][yCoord].coordinate;
    }

}