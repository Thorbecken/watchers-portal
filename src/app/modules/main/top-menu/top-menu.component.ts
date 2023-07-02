import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FaunaService} from 'src/app/services/fauna-service.service';
import { FloraService } from 'src/app/services/flora-service.service';
import { PointOfInterestService } from 'src/app/services/points-of-interest-service';
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

  constructor(private _faunaService: FaunaService, private _floraService: FloraService, private _pointOfInterestService: PointOfInterestService) { }

  ngOnInit() {
    this.currentView = 'TILE';
    this.currentSelectedView.emit(this.currentView);
  }

  seedFauna(){
    this._faunaService.seedLife(this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  seedFlora(){
    this._floraService.seedLife(this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  addHotspot(){
    this._pointOfInterestService.createHotspot(this.coordinate.xCoord, this.coordinate.yCoord).subscribe;
    console.log("Created a hotspot at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  removeHotspot(){
    this._pointOfInterestService.deleteHotspot(this.coordinate.xCoord, this.coordinate.yCoord).subscribe;
    console.log("Deleted a hotspot at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  addTectonicPlume(){
    this._pointOfInterestService.createTectonicPlume(this.coordinate.xCoord, this.coordinate.yCoord).subscribe;
    console.log("Created a tectonic plume at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  removeTectonicPlume(){
    this._pointOfInterestService.deleteTectonicPlume(this.coordinate.xCoord, this.coordinate.yCoord).subscribe;
    console.log("Deleted a tectonic plume at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  switchToTileView(){
    this.currentView = 'TILE';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToContinentalView(){
    this.currentView = 'CONTINENT';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToFlowDirectionView(){
    this.currentView = 'FLOW_DIRECTION';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToRainMoistureColorView(){
    this.currentView = 'RAIN_MOISTURE';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToAirMoistureColorView(){
    this.currentView = 'AIR_MOISTURE';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToPlantView(){
    this.currentView = 'PLANT';
    this.currentSelectedView.emit(this.currentView);
  }

  switchToAnimalView(){
    this.currentView = 'ANIMAL';
    this.currentSelectedView.emit(this.currentView);
  }

}
