import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizedGif'
})
export class SanitizedGifPipe implements PipeTransform {

  transform(imageName: string): any {
    return this.sanitizer.bypassSecurityTrustUrl("assets/" + imageName + ".gif");
  }
  
  constructor( private sanitizer: DomSanitizer) {
  }

}
