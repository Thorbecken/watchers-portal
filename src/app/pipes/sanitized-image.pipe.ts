import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizedImage'
})
export class SanitizedImagePipe implements PipeTransform {

  transform(imageName: string): any {
    return this.sanitizer.bypassSecurityTrustUrl("assets/" + imageName + ".png");
  }
  
  constructor( private sanitizer: DomSanitizer) {
  }

}
