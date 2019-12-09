import { Component, OnInit, Input } from '@angular/core';

import { World, Tile, Coordinate } from 'src/app/shared/models/world';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-tile-holder',
  templateUrl: './tile-holder.component.html',
  styleUrls: ['./tile-holder.component.css']
})
export class TileHolderComponent implements OnInit {
  @Input('tileHolder')
  public tile: Tile;



getEmbeddedLandType(tile: Tile) {
  return this.sanitizer.bypassSecurityTrustUrl("assets/" + tile.landType + ".png");
}

  constructor( private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
  }

}
