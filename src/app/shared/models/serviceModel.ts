import { Coordinate } from "./world";

export class WorldInteractionCommand {
    coordinate: Coordinate;
    mainAction: MainAction;
    subAction: string | null;

    constructor(coordinate: Coordinate, mainAction: MainAction, subAction: string | null){
    this.coordinate = coordinate;
    this.mainAction = mainAction;
    this.subAction = subAction;
    }
}

export enum MainAction {
    SEED_FAUNA,
    SEED_FLORA,
    PLACE_HOTSPOT,
    PLACE_TECTONIC_PLUME,
    REMOVE_POINT_OF_INTEREST,
    NONE
}

export function getMainAction(action: String): MainAction {
        switch(action){
            case 'seedFauna': return MainAction.SEED_FAUNA;
            case 'seedFlora': return MainAction.SEED_FLORA;
            case 'placeHotspot': return MainAction.PLACE_HOTSPOT;
            case 'placeTectonicPlume': return MainAction.PLACE_TECTONIC_PLUME;
            case 'removePointOfInterest': return MainAction.REMOVE_POINT_OF_INTEREST;
            default: return MainAction.NONE;
        }
   }

   export enum ModalType {
    FLORA,
    FAUNA
   }