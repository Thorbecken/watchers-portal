import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coordinate, Tile } from 'src/app/shared/models/world';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-coordinate-holder',
  templateUrl: './coordinate-holder.component.html',
  styleUrls: ['./coordinate-holder.component.css']
})

export class TileHolderComponent implements OnInit {
  @Input('coordinateHolder')
  public coordinate: Coordinate;
  
  @Output() coordinateSelected = new EventEmitter<Coordinate>();

  onClickMe() {
    this.coordinateSelected.emit(this.coordinate);
  }


getEmbeddedLandType(tile: Tile) {
  return this.sanitizer.bypassSecurityTrustUrl("assets/" + tile.surfaceType + ".png");
}

  constructor( private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
  }

}
