import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActorService } from 'src/app/services/actor-service.service';
import { Coordinate } from 'src/app/shared/models/world';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input('currentCoordinate')
  public coordinate: Coordinate;

  
  @Output() currentSelectedView = new EventEmitter<string>();
  public currentView: string;

  constructor(private _actorService: ActorService) { }

  ngOnInit() {
    this.currentView = 'TILE';
    this.currentSelectedView.emit(this.currentView);
  }

  seedLife(){
    this._actorService.seedLife(1, this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  switchToTileView(){
    this.currentView = 'TILE';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToContinentalView(){
    this.currentView = 'CONTINENT';
    this.currentSelectedView.emit(this.currentView);
  }

}
