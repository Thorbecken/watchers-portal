import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coordinate, Tile } from 'src/app/shared/models/world';
import { DomSanitizer } from '@angular/platform-browser';
import { ContinentalColoringPipe } from 'src/app/pipes/continental-coloring.pipe';
import { CoordinateHolder, Holder } from 'src/app/shared/models/coordinateholder';

@Component({
  selector: 'app-coordinate-holder',
  templateUrl: './coordinate-holder.component.html',
  styleUrls: ['./coordinate-holder.component.css']
})

export class TileHolderComponent implements OnInit {
  @Input('holder')
  public holder: Holder;
  
  @Input('currentView')
  public currentView: string;
  
  @Output() coordinateSelected = new EventEmitter<Coordinate>();

  onClickMe() {
    this.coordinateSelected.emit(this.holder.coordinate);
  }


getEmbeddedLandType(tile: Tile) {
  return this.sanitizer.bypassSecurityTrustUrl("assets/" + tile.surfaceType + ".png");
}

  constructor( private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
  }

}
