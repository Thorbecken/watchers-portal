import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/shared/models/world';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  currentTile: Tile = null;

  constructor() { }

  ngOnInit() {
  }

  currentSelectedTile(tile: Tile){
    this.currentTile = tile;
  }

}


