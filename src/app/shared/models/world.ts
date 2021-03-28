export class World {
    xSize: number;
    ySize: number;
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
    climate: Climate;
}

export class Climate {
    currentCloud: Cloud;
}

export class Cloud {
    airMoisture: Number;
}

export class Continent {
    continentId: number;
}

export class Biome {
    biomeTypeEnum: BiomeTypeEnum;
    currentFood: number;
    maxFood: number;
    fertillity: number;
}

export class Actor {
    status: StateType;
    naturalHabitat: NaturalHabitat;
    foodReserve: number;
    maxFood: number;
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