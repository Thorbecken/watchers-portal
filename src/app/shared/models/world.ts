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
}

export class Tile {
    height: number;
    biome: Biome;
    surfaceType: SurfaceType;
    rockType: RockType;
    river: River;
}

export class River {
    riverThroughput: number;
}

export class Climate {
    longitude: number;
    latitude: number;
    meanTemperature: number;
    skyTile: Skytile;
}

export class Skytile {
    airMoisture: Number;
    outgoingAircurrents: OutgoingAircurrent;
    incommingAircurrents: IncommingAircurrents;
}

export class OutgoingAircurrent {
    aircurrentList: Aircurrent[];
}

export class IncommingAircurrents {
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
    grassFlora: Flora;
    treeBiomass: number;
    treeFlora: Flora;
}

export enum Flora {
    GRASS = "GRASS",
    TREE = "TREE"
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

export enum AnimalType {
    RABBIT = "RABBIT",
    WHALE = "WHALE"
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
    OCEAN = "OCEAN", SEA = "SEA", COASTAL = "COASTAL",

    POLAR_MOUNTAIN_DESERT = "POLAR_MOUNTAIN_DESERT", POLAR_MOUNTAIN_TUNDRA = "POLAR_MOUNTAIN_TUNDRA", POLAR_MOUNTAIN_TAIGA = "POLAR_MOUNTAIN_TAIGA",
    POLAR_HILL_DESERT = "POLAR_HILL_DESERT", POLAR_HILL_TUNDRA = "POLAR_HILL_TUNDRA", POLAR_HILL_TAIGA = "POLAR_HILL_TAIGA",
    POLAR_PLAIN_DESERT = "POLAR_PLAIN_DESERT", POLAR_PLAIN_TUNDRA = "POLAR_PLAIN_TUNDRA", POLAR_PLAIN_TAIGA = "POLAR_PLAIN_TAIGA",

    TEMPERATAE_MOUNTAIN_DESERT = "TEMPERATAE_MOUNTAIN_DESERT", TEMPERATE_MOUNTAIN_GRASSLAND = "TEMPERATE_MOUNTAIN_GRASSLAND",  TEMPERATE_MOUNTAIN_FOREST = "TEMPERATE_MOUNTAIN_FOREST",
    TEMPERATE_HILL_DESERT = "TEMPERATE_HILL_DESERT", TEMPERATE_HILL_GRASSLAND = "TEMPERATE_HILL_GRASSLAND", TEMPERATE_HILL_FOREST = "TEMPERATE_HILL_FOREST",
    TEMPERATE_PLAIN_DESERT = "TEMPERATE_PLAIN_DESERT", TEMPERATE_PLAIN_GRASSLAND = "TEMPERATE_PLAIN_GRASSLAND", TEMPERATE_PLAIN_FOREST ="TEMPERATE_PLAIN_FOREST",

    TROPICAL_MOUNTAIN_DESERT = "TROPICAL_MOUNTAIN_DESERT", TROPICAL_MOUNTAIN_SAVANAH = "TROPICAL_MOUNTAIN_SAVANAH", TROPICAL_MOUNTAIN_JUNGLE = "TROPICAL_MOUNTAIN_JUNGLE",
    TROPICAL_HILL_DESERT = "TROPICAL_HILL_DESERT", TROPICAL_HILL_SAVANAH = "TROPICAL_HILL_SAVANAH", TROPICAL_HILL_JUNGLE ="TROPICAL_HILL_JUNGLE",
    TROPICAL_PLAIN_DESERT = "TROPICAL_PLAIN_DESERT", TROPICAL_PLAIN_SAVANAH = "TROPICAL_PLAIN_SAVANAH", TROPICAL_PLAIN_JUNGLE = "TROPICAL_PLAIN_JUNGLE"
}