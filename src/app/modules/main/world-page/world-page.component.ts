import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { World, Coordinate } from 'src/app/shared/models/world';
import { WorldService } from 'src/app/services/world-service.service';


@Component({
  selector: 'world-page',
  templateUrl: './world-page.component.html',
  styleUrls: ['./world-page.component.css']
})

export class WorldPageComponent implements OnInit {
  title = 'WorldPage';
  public world: World;
  @Output() currentSelectedCoordinate = new EventEmitter<Coordinate>();
  
  @Input('currentView')
  public currentView: string;
  
  constructor(private _worldService: WorldService) { }

  coordinateSelected(coordinate: Coordinate){
    this.currentSelectedCoordinate.emit(coordinate);
  }

  ngOnInit() {
    this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = data
        console.log('World size is ' + this.world.coordinates.length + ' coordinates.')
        console.log('x size = ' +this.world.xSize + ' y size = ' + this.world.ySize)
        }
      );

      this.startTimer();
  } 

  timerTime: number = 120;
  timeLeft: number = this.timerTime;
  interval: any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.timerTime;

        this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = data
        console.log('World size is ' + this.world.coordinates.length + ' coordinates.')
        console.log('x size = ' +this.world.xSize + ' y size = ' + this.world.ySize)
        }
      );
      }
    },1000)
  }
}
