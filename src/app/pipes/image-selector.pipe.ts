import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSelector'
})
export class ImageSelectorPipe implements PipeTransform {

  transform(incomingType: string): string {
    switch(incomingType) {
    case 'land':
      return 'grassFiller';
    case 'water':
      return 'OceanFiller';
    }
    return null;
  }

}
