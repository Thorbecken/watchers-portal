import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate } from '../shared/models/world';

@Pipe({
  name: 'continentalColoring'
})
export class ContinentalColoringPipe implements PipeTransform {

  transform(coordinate: Coordinate): string {
    let prefix: string = 'color/';
    switch(coordinate.continent.continentId){    
      case 1: return prefix + 'color-1';
      case 2: return prefix + 'color-2';
      case 3: return prefix + 'color-3';
      case 4: return prefix + 'color-4';
      case 5: return prefix + 'color-5';
      case 6: return prefix + 'color-6';
      case 7: return prefix + 'color-7';
      case 8: return prefix + 'color-8';
      case 9: return prefix + 'color-9';
      case 10: return prefix + 'color-10';
      case 11: return prefix + 'color-11';
      case 12: return prefix + 'color-12';
      case 13: return prefix + 'color-13';
      case 14: return prefix + 'color-14';
      case 15: return prefix + 'color-15';
      case 16: return prefix + 'color-16';
      case 17: return prefix + 'color-17';
      case 18: return prefix + 'color-18';
      case 19: return prefix + 'color-19';
      case 20: return prefix + 'color-20';
      case 21: return prefix + 'color-21';
      case 22: return prefix + 'color-22';
      case 23: return prefix + 'color-23';
      case 24: return prefix + 'color-24';  
      case 25: return prefix + 'color-1';
      case 26: return prefix + 'color-2';
      case 27: return prefix + 'color-3';
      case 28: return prefix + 'color-4';
      case 29: return prefix + 'color-5';
      case 30: return prefix + 'color-6';
      case 31: return prefix + 'color-7';
      case 32: return prefix + 'color-8';
      case 33: return prefix + 'color-9';
      case 34: return prefix + 'color-10';
      case 35: return prefix + 'color-11';
      case 36: return prefix + 'color-12';
      case 37: return prefix + 'color-13';
      case 38: return prefix + 'color-14';
      case 39: return prefix + 'color-15';
      case 40: return prefix + 'color-16';
      case 41: return prefix + 'color-17';
      case 42: return prefix + 'color-18';
      case 43: return prefix + 'color-19';
      case 44: return prefix + 'color-20';
      case 45: return prefix + 'color-21';
      case 46: return prefix + 'color-22';
      case 47: return prefix + 'color-23';
      case 48: return prefix + 'color-24';
      default:
        return prefix + 'color-1';
    }
  }

}
