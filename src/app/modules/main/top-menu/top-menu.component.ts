import { Component, OnInit, Input } from '@angular/core';
import { Coordinate } from 'src/app/shared/models/world';
import {ActorService} from 'src/app/services/actor-service.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input('currentCoordinate')
  public coordinate: Coordinate;

  constructor(private _actorService: ActorService) { }

  ngOnInit() {
  }

  seedLife(){
    this._actorService.seedLife(1, this.coordinate.xCoord, this.coordinate.yCoord).subscribe();
    console.log("Seeded life at coordinate: " + this.coordinate.xCoord + "x ," + this.coordinate.yCoord + "y");
  }

}
