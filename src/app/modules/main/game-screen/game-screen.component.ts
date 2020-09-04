import { Component, OnInit } from '@angular/core';
import { Coordinate } from 'src/app/shared/models/world';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  currentCoordinate: Coordinate = null;
  currentView: string = 'TILE';

  constructor() { }

  ngOnInit() {
  }

  currentSelectedCoordinate(coordinate: Coordinate){
    this.currentCoordinate = coordinate;
  }
  
  currentSelectedView(currentView: string){
    this.currentView = currentView;
  }

}


