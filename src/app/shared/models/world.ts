export class World {
    xsize: number;
    ysize: number;
    tiles: Tile[];
}

export class Tile {    
    xCoord: number;
    yCoord: number;
    zCoord: number;
    biome: Biome;
    actors: Actor[];
    surfaceType: SurfaceType;
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
    CONTINENTAL = "CONTINENTAL",
    OCEANIC = "OCEANIC" ,
    COASTAL = "COASTAL",
    DEEP_OCEAN = "DEEP_OCEAN" 
}