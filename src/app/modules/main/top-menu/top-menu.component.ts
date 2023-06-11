import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FaunaService} from 'src/app/services/fauna-service.service';
import { FloraService } from 'src/app/services/flora-service.service';
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

  constructor(private _faunaService: FaunaService, private _floraService: FloraService) { }

  ngOnInit() {
    this.currentView = 'TILE';
    this.currentSelectedView.emit(this.currentView);
  }

  seedFauna(){
    this._faunaService.seedLife(1, this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

  seedFlora(){
    this._floraService.seedLife(1, this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
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
