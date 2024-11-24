export class World {
    xSize: number;
    ySize: number;
    coordinates: Coordinate[];
}

export class Coordinate {
    continent: Continent;
    xCoord: number;
    yCoord: number;
    tile: Tile;
    actors: Actor[];
    climate: Climate;
    pointOfInterest: PointOfInterest;
}

export class Tile {
    height: number;
    biome: Biome;
    surfaceType: SurfaceType;
    rockType: RockType;
    river: River;
    rainfall: number;
    downFlowAmount: number;
    flowDirection: string;
    pointOfInterest: PointOfInterest;
}

export class PointOfInterest{
    type: string;
    flora: string;
}

export enum Direction {
    UP, RIGHT, DOWN, LEFT
}

export class River {
    riverThroughput: number;
}

export class Climate {
    longitude: number;
    latitude: number;
    meanTemperature: number;
    airMoisture: Number;
    outgoingAircurrents: OutgoingAircurrent;
    incomingAircurrents: IncomingAircurrents;
}

export class OutgoingAircurrent {
    aircurrentList: Aircurrent[];
}

export class IncomingAircurrents {
    aircurrentList: Aircurrent[];
}

export class Aircurrent {
    currentStrength: Number;
    aircurrentType: AircurrentType;
    startingXCoordinate: Number;
    endingXCoordinate: Number;
    startingYCoordinate: Number;
    endingYCoordinate: Number;
}

export enum AircurrentType{
    LATITUDAL, LONGITUDAL
}

export class Continent {
    continentId: number;
    type: SurfaceType;
    basicRockType: RockType;
}

export class Biome {
    grassBiomass: number;
    grassFlora: Flora | null;
    treeBiomass: number;
    treeFlora: Flora | null;
}

export class Actor {
    status: StateType;
    naturalHabitat: NaturalHabitat;
    foodReserve: number;
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

export interface AnimalType {
    name: string;
    max_food_reserve: number;
    foraging: number;
    metabolism: number;
    reproduction_rate: number;
    movement: number;
    natural_habitat: string;
}

export enum SurfaceType {
    OCEAN = "OCEAN" ,
    SEA = "SEA",
    COASTAL = "COASTAL" ,
    LAKE = "LAKE",
    LARGE_RIVER ="LARGE_RIVER",
    PLAIN = "PLAIN",
    HILL = "HILL",
    MOUNTAIN = "MOUNTAIN",
}

export enum RockType {
    GRANITE = "GRANITE",
    QUARTZ = "QUARTZ",
    ORANGE_SANDSTONE = "ORANGE_SANDSTONE",
    RED_SANDSTONE = "RED_SANDSTONE" ,
    BROWNSTONE = "BROWNSTONE",
    BASALT = "BASALT",
    CHALK = "CHALK" 
}

export enum BiomeTypeEnum {
    OCEAN = "OCEAN", SEA = "SEA", COASTAL = "COASTAL"
}

export interface Fauna {
    name: string;
    max_food_reserve: number;
    foraging: number;
    metabolism: number;
    reproduction_rate: number;
    movement: number;
    natural_habitat: string;
  }

  export interface Flora {
    name: string;
    natural_habitat: string;
    type: string;
    image: string;
    min_temperature: number;
    max_temperature: number;
    water_intake: number;
    growth_rate: number;
    max_biomass: number;
  }