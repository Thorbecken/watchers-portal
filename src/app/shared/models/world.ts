export class World {
    xsize: number;
    ysize: number;
    tiles: Tile[];
}

export class Tile {    
    xCoord: number;
    yCoord: number;
    zCoord: number;
    SurfaceType: SurfaceType;
}

export class Coordinate {
}

export enum SurfaceType {
    CONTINENTAL = "CONTINENTAL",
    OCEANIC = "OCEANIC" 
}