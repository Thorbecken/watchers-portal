import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate, Direction, PointOfInterest } from '../shared/models/world';

@Pipe({
  name: 'pointOfInterestSelector'
})
export class PointOfInterestSelectorPipe implements PipeTransform {

  transform(pointOfInterest: PointOfInterest): string {
    let prefix: string = 'pointOfInterest/';
    switch(pointOfInterest.type){    
      case 'TectonicCrystal': return prefix + 'YellowCrystal';
      case 'HotSpotCrystal': return prefix + 'RedCrystal';
      case 'AquiferCrystal': return prefix + 'BlueCrystal';
      case 'WindCrystal': return prefix + 'GreenCrystal';
      case 'GreatFlora':
        switch(pointOfInterest.flora){
          case 'LEAF_TREE': return prefix + 'Birch';
          case 'PINE_TREE': return prefix + 'Pine';
          case 'PALM_TREE': return prefix + 'Palm';
          case 'SAKURA_TREE': return prefix + 'Sakura';
          case 'WISTERIA_TREE': return prefix + 'Wisteria';
          case 'JACARANDA_TREE': return prefix + 'Jacaranda';
          default: return 'color/blank';
        };
      default:
        return 'color/blank';
    }
  }

}
