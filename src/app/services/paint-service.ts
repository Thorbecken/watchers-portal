import { SpriteActorImageSelectorPipe } from "../pipes/sprite-actor-image-selector.pipe";
import { SpritePointOfInterestSelectorPipe } from "../pipes/sprite-point-of-interest.pipe";
import { SpriteEarthSelectorPipe } from "../pipes/terain/sprite-earth-selector.pipe";
import { SpriteGrassSelectorPipe } from "../pipes/terain/sprite-grass-selector.pipe";
import { SpriteSnowSelectorPipe } from "../pipes/terain/sprite-snow-selector.pipe";
import { SpriteTreeSelectorPipe } from "../pipes/terain/sprite-tree-selector-pipe";
import { SpriteWaterSelectorPipe } from "../pipes/terain/sprite-water-selector.pipe";
import { Coordinate, SurfaceType } from "../shared/models/world";
import { ImageHolder, ImageLoader } from "./image-loader-service";

export class PaintService {

    plainTerrainSpritesheet: HTMLImageElement;
    hillTerrainSpritesheet: HTMLImageElement;
    mountainTerrainSpritesheet: HTMLImageElement;
    waterTerrainSpritesheet: HTMLImageElement;
    waterWaves: HTMLImageElement;
    pointOfInterestSpriteSheet: HTMLImageElement;
    actorSpriteSheet: HTMLImageElement;

    landSelector: SpriteEarthSelectorPipe;
    waterSelector: SpriteWaterSelectorPipe;
    grassSelector: SpriteGrassSelectorPipe;
    treeSelector: SpriteTreeSelectorPipe;
    snowSelector: SpriteSnowSelectorPipe;
    pointOfInterestSelector: SpritePointOfInterestSelectorPipe;
    actorSelector: SpriteActorImageSelectorPipe;

    loader: ImageLoader;

    constructor() {
        this.loader = new ImageLoader();

        this.landSelector = new SpriteEarthSelectorPipe();
        this.waterSelector = new SpriteWaterSelectorPipe();
        this.grassSelector = new SpriteGrassSelectorPipe();
        this.treeSelector = new SpriteTreeSelectorPipe();
        this.snowSelector = new SpriteSnowSelectorPipe();
        this.pointOfInterestSelector = new SpritePointOfInterestSelectorPipe();
        this.actorSelector = new SpriteActorImageSelectorPipe();

        this.plainTerrainSpritesheet = new Image();
        this.hillTerrainSpritesheet = new Image();
        this.mountainTerrainSpritesheet = new Image();
        this.waterTerrainSpritesheet = new Image();
        this.waterWaves = new Image();
        this.pointOfInterestSpriteSheet = new Image();
        this.actorSpriteSheet = new Image();

        this.loader.loader([
            new ImageHolder(this.plainTerrainSpritesheet, 'assets/spritesheets/plainSpritesheet.png'),
            new ImageHolder(this.hillTerrainSpritesheet, 'assets/spritesheets/hillSpritesheet.png'),
            new ImageHolder(this.mountainTerrainSpritesheet, 'assets/spritesheets/mountainSpritesheet.png'),
            new ImageHolder(this.waterTerrainSpritesheet, 'assets/spritesheets/waterSpritesheet.png'),
            new ImageHolder(this.waterWaves, 'assets/terrain/water/water_waves.gif'),
            new ImageHolder(this.pointOfInterestSpriteSheet, 'assets/spritesheets/pointsOfInterestSpritesheet.png'),
            new ImageHolder(this.actorSpriteSheet, 'assets/spritesheets/animalSpritesheet.png')
        ]);
    }

    paintCoordinate(context: CanvasRenderingContext2D, coordinate: Coordinate) {
        let x = coordinate.xCoord;
        let y = coordinate.yCoord
        let landNumber = this.landSelector.transform(coordinate.tile);
        let biome = this.selectBiome(coordinate);


        if(coordinate.tile.surfaceType == SurfaceType.COASTAL || coordinate.tile.surfaceType == SurfaceType.SEA || coordinate.tile.surfaceType == SurfaceType.OCEAN){
            context.drawImage(this.plainTerrainSpritesheet, landNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);

            if (coordinate.tile.biome.grassFlora != null) {
                let grassNumber = this.grassSelector.transform(coordinate.tile);
                context.drawImage(biome, grassNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
            }
        } else {
            context.drawImage(biome, landNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
            if (coordinate.tile.biome.grassFlora != null) {
                let grassNumber = this.grassSelector.transform(coordinate.tile);
                context.drawImage(biome, grassNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
            }

            if (coordinate.climate.meanTemperature < -17) {
                let snowNumber = this.snowSelector.transform(coordinate.tile);
                context.drawImage(biome, snowNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);

            }
            
            if (coordinate.tile.river) {
                let waterNumber = this.waterSelector.transform(coordinate.tile);
                context.drawImage(biome, waterNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
            }
        }

        if (coordinate.tile.biome.treeFlora != null) {
            let treeNumber = this.treeSelector.transform(coordinate.tile);
            context.drawImage(biome, treeNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
        }

        if (coordinate.tile.surfaceType == SurfaceType.OCEAN || coordinate.tile.surfaceType == SurfaceType.SEA || coordinate.tile.surfaceType == SurfaceType.COASTAL) {
            let waterNumber = this.waterSelector.transform(coordinate.tile);
            context.drawImage(this.waterTerrainSpritesheet, waterNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
            context.drawImage(this.waterWaves, ((x - 1) * 32), ((y - 1) * 32));
        }

        if (coordinate.tile.pointOfInterest != null || coordinate.pointOfInterest != null) {
            var pointOfInterest = coordinate.tile.pointOfInterest;
            if(coordinate.tile.pointOfInterest == null) {
                pointOfInterest = coordinate.pointOfInterest;
            }
            let pointOfInterestNumber = this.pointOfInterestSelector.transform(pointOfInterest);
            context.drawImage(this.pointOfInterestSpriteSheet, pointOfInterestNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
        }

        if (coordinate.actors.length != 0) {
            let actorNumber = this.actorSelector.transform(coordinate.actors);
            context.drawImage(this.actorSpriteSheet, actorNumber, 0, 32, 32, ((x - 1) * 32), ((y - 1) * 32), 32, 32);
        }
    }

    selectBiome(coordinate: Coordinate): HTMLImageElement {
        switch (coordinate.tile.surfaceType) {
            case SurfaceType.LAKE:
            case SurfaceType.LARGE_RIVER:
            case SurfaceType.PLAIN:
                return this.plainTerrainSpritesheet;
            case SurfaceType.HILL:
                return this.hillTerrainSpritesheet;
            case SurfaceType.MOUNTAIN:
                return this.mountainTerrainSpritesheet;
            case SurfaceType.OCEAN:
            case SurfaceType.SEA:
            case SurfaceType.COASTAL:
            default:
                return this.waterTerrainSpritesheet;
        }
    }
}