export class World {
    xsize: number;
    ysize: number;
    tiles: Tile[];
}

export class Tile {
    coordinate: Coordinate;
    height: number;
    biome: Biome;
    actors: Actor[];
    surfaceType: SurfaceType;
}

export class Coordinate {
    xCoord: number;
    yCoord: number;
}

export class Biome {
    currentFood: number;
    maxFood: number;
    fertillity: number;
}

export class Actor {
    stateType: StateType;
    naturalHabiat: NaturalHabitat;
    foodReserve: number;
    maxFoodReserve: number;
    foraging: number;
    metabolisme: number;
    movement: number;
    animalType: AnimalType;
}

export enum StateType {
    ALIVE = "ALIVE",
    DEAD = "DEAD"
}

export enum NaturalHabitat {
    AQUATIC = "AQUATIC",
    TERRESTRIAL = "TERRESTRIAL",
    ALL = "ALL"
}

export enum AnimalType {
    RABBIT = "RABBIT",
    WHALE = "WHALE"
}

export enum SurfaceType {
    MOUNTAIN = "MOUNTAIN",
    HILL = "HILL",
    PLAIN = "PLAIN",
    OCEANIC = "OCEANIC" ,
    COASTAL = "COASTAL",
    DEEP_OCEAN = "DEEP_OCEAN" 
}