import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tile } from 'src/app/shared/models/world';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tile-holder',
  templateUrl: './tile-holder.component.html',
  styleUrls: ['./tile-holder.component.css']
})

export class TileHolderComponent implements OnInit {
  @Input('tileHolder')
  public tile: Tile;
  
  @Output() tileSelected = new EventEmitter<Tile>();

  onClickMe() {
    this.tileSelected.emit(this.tile);
  }


getEmbeddedLandType(tile: Tile) {
  return this.sanitizer.bypassSecurityTrustUrl("assets/" + tile.surfaceType + ".png");
}

  constructor( private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
  }

}
