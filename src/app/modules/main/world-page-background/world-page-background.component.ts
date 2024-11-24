import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { World, Coordinate, Fauna, Flora } from 'src/app/shared/models/world';
import { WorldService } from 'src/app/services/world-service.service';
import { WorldInteractionCommand } from 'src/app/shared/models/serviceModel';


@Component({
  selector: 'world-page-background',
  templateUrl: './world-page-background.component.html',
  styleUrls: ['./world-page-background.component.css']
})

export class WorldPageBackgroundComponent implements OnInit {
  title = 'WorldPageBackground';
  public world: WorldHolder;
  public worldLoaded: boolean;
  @Output() currentSelectedCoordinate = new EventEmitter<Coordinate>();
  @Output() worldInteractionCommand = new EventEmitter<WorldInteractionCommand>();

  @Input('currentView')
  public currentView: string;
  
  @Input('floraList')
  public floraList: Flora[] = [];

  @Input('faunaList')
  public faunaList: Fauna[] = [];

  constructor(private _worldService: WorldService) { }

  coordinateSelected(coordinate: Coordinate) {
    this.currentSelectedCoordinate.emit(coordinate);
  }

  rightClickMenuActions(command: WorldInteractionCommand) {
    console.log('Received WorldInteractionCommand:', command);
    this.worldInteractionCommand.emit(command);
  }

  ngOnInit() {
    this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = new WorldHolder(data);
        this.worldLoaded = true;
        console.log('World size is ' + data.coordinates.length + ' coordinates.')
        console.log('x size = ' + data.xSize + ' y size = ' + data.ySize)
      }
      );

    this.startTimer();
  }

  timerTime: number = 10;
  timeLeft: number = this.timerTime;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.timerTime;

        this._worldService.getWorld("1")
          .subscribe(data => {
            console.log('setting world')
            if (data.xSize != this.world.xSize || data.ySize != this.world.ySize) {
              this.world = new WorldHolder(data);
            }
            this.world.update(data);
            console.log('World size is ' + data.coordinates.length + ' coordinates.')
            console.log('x size = ' + data.xSize + ' y size = ' + data.ySize)
          }
          );
      }
    }, 1000)
  }
}

export class WorldHolder {
  map: Map<number, Map<number, CoordinateHolder>>;
  xSize: number;
  ySize: number;

  constructor(world: World) {
    this.map = new Map();
    this.xSize = world.xSize;
    this.ySize = world.ySize;

    for (let x = 1; x <= world.xSize; x++) {
      this.map.set(x, new Map());
      for (let y = 1; y <= world.ySize; y++) {
        this.map.get(x)?.set(y, new CoordinateHolder());
      }
    }

    this.update(world);
  }

  update(world: World) {
    world.coordinates.forEach(coordinate => this.map.get(coordinate.xCoord)?.get(coordinate.yCoord)?.update(coordinate));
    console.log(this.map);
  }

}

export class CoordinateHolder {
  coordinate: Coordinate;

  update(coordinate: Coordinate) {
    this.coordinate = coordinate;
  }

}