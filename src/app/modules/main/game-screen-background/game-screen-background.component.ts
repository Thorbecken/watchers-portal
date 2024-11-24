import { Component, OnInit } from '@angular/core';
import { FaunaService } from 'src/app/services/fauna-service.service';
import { FloraService } from 'src/app/services/flora-service.service';
import { PointOfInterestService } from 'src/app/services/points-of-interest-service';
import { MainAction, WorldInteractionCommand } from 'src/app/shared/models/serviceModel';
import { Coordinate, Fauna, Flora } from 'src/app/shared/models/world';

@Component({
  selector: 'app-game-screen-background',
  templateUrl: './game-screen-background.component.html',
  styleUrls: ['./game-screen-background.component.css']
})
export class GameScreenBackgroundComponent implements OnInit {
  currentCoordinate: Coordinate;
  currentView: string = 'TILE';

  floraList: Flora[] = [];
  faunaList: Fauna[] = [];

  constructor(private floraService: FloraService, private faunaService: FaunaService, private _pointOfInterestService: PointOfInterestService) { }

  ngOnInit(): void {
    this.loadFlora();
    this.loadFauna();
  }

  loadFlora(): void {
    this.floraService.getFlora().subscribe(data => {
      this.floraList = data;
    });
  }

  loadFauna(): void {
    this.faunaService.getFauna().subscribe(data => {
      this.faunaList = data;
    });
  }

  currentSelectedCoordinate(coordinate: Coordinate){
    this.currentCoordinate = coordinate;
  }
  
  currentSelectedView(currentView: string){
    this.currentView = currentView;
  }

  worldInteractionCommand(worldInteractionCommand: WorldInteractionCommand){
    switch(worldInteractionCommand.mainAction){
      case MainAction.SEED_FAUNA:
        this.faunaService.placeFauna(worldInteractionCommand.coordinate.xCoord, worldInteractionCommand.coordinate.yCoord, worldInteractionCommand.subAction!).subscribe();
        console.log("Created a " + worldInteractionCommand.subAction + " at coordinate: " + worldInteractionCommand.coordinate.xCoord + "x ," + worldInteractionCommand.coordinate.yCoord + "y");
        return;
      case MainAction.SEED_FLORA:
        this.floraService.placeFlora(worldInteractionCommand.coordinate.xCoord, worldInteractionCommand.coordinate.yCoord, worldInteractionCommand.subAction!).subscribe();
        console.log("Created a " + worldInteractionCommand.subAction + " at coordinate: " + worldInteractionCommand.coordinate.xCoord + "x ," + worldInteractionCommand.coordinate.yCoord + "y");
        return;
      case MainAction.PLACE_HOTSPOT:
        this._pointOfInterestService.createHotspot(worldInteractionCommand.coordinate.xCoord, worldInteractionCommand.coordinate.yCoord).subscribe();
        console.log("Created a hotspot at coordinate: " + worldInteractionCommand.coordinate.xCoord + "x ," + worldInteractionCommand.coordinate.yCoord + "y");
        return;
      case MainAction.PLACE_TECTONIC_PLUME:
        this._pointOfInterestService.createTectonicPlume(worldInteractionCommand.coordinate.xCoord, worldInteractionCommand.coordinate.yCoord).subscribe();
        console.log("Created a tectonic plume at coordinate: " + worldInteractionCommand.coordinate.xCoord + "x ," + worldInteractionCommand.coordinate.yCoord + "y");
        return;
      case MainAction.REMOVE_POINT_OF_INTEREST:
        this._pointOfInterestService.deletePointOfInterest(worldInteractionCommand.coordinate.xCoord, worldInteractionCommand.coordinate.yCoord).subscribe();
        console.log("Deleted a point of interest at coordinate: " + worldInteractionCommand.coordinate.xCoord + "x ," + worldInteractionCommand.coordinate.yCoord + "y");
        return;
      case MainAction.NONE:
        return;
    }
  }

}


