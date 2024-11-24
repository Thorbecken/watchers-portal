import { Pipe, PipeTransform } from '@angular/core';
import { PointOfInterest } from '../shared/models/world';

@Pipe({
  name: 'spritePointOfInterestSelector'
})
export class SpritePointOfInterestSelectorPipe implements PipeTransform {


  transform(pointOfInterest: PointOfInterest): number {
    let jacaranda = (4-1)*32;
    let leaf = (1-1)*32;
    let palm = (5-1)*32;
    let pine = (6-1)*32;
    let sakura = (8-1)*32;
    let wisteria = (9-1)*32;
    
    let blue = (2-1)*32;
    let green = (3-1)*32;
    let yellow = (10-1)*32;
    let red = (7-1)*32;

    switch(pointOfInterest.type){    
      case 'TectonicCrystal': return yellow;
      case 'HotSpotCrystal': return red;
      case 'AquiferCrystal': return blue;
      case 'WindCrystal': return green;
      case 'GreatFlora':
        switch(pointOfInterest.flora){
          case 'LEAF_TREE': return leaf;
          case 'PINE_TREE': return pine;
          case 'PALM_TREE': return palm;
          case 'SAKURA_TREE': return sakura;
          case 'WISTERIA_TREE': return wisteria;
          case 'JACARANDA_TREE': return jacaranda;
          default: return blue;
        };
      default:
        return blue;
    }
  }

}
