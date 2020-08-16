import { Component, OnInit, Input } from '@angular/core';
import { Tile } from 'src/app/shared/models/world';
import {ActorService} from 'src/app/services/actor-service.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input('currentTile')
  public tile: Tile;

  constructor(private _actorService: ActorService) { }

  ngOnInit() {
  }

  seedLife(){
    this._actorService.seedLife(1, this.tile.coordinate.xCoord, this.tile.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.tile.coordinate.xCoord + "x ," + this.tile.coordinate.yCoord + "y");
  }

}
