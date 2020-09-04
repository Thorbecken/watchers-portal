export class World {
    xsize: number;
    ysize: number;
    coordinates: Coordinate[];
}

export class Tile {
    height: number;
    biome: Biome;
    surfaceType: SurfaceType;
}

export class Coordinate {
    continent: Continent;
    xCoord: number;
    yCoord: number;
    tile: Tile;
    actors: Actor[];
}

export class Continent {
    id: number;
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