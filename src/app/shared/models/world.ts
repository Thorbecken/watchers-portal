export class World {
    xSize: number;
    ySize: number;
    tiles: Tile[];
}

export class Tile {
    coordinate: Coordinate;
    landType: string;
}

export class Coordinate {
    xCoord: number;
    yCoord: number;
    zCoord: number;
}