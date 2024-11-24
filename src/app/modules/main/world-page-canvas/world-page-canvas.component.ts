import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { World, Coordinate } from 'src/app/shared/models/world';
import { WorldService } from 'src/app/services/world-service.service';
import { PaintService } from 'src/app/services/paint-service';

@Component({
  selector: 'world-page-canvas',
  templateUrl: './world-page-canvas.component.html',
  styleUrls: ['./world-page-canvas.component.css'],
  template: `<canvas #worldScreen></canvas>`
})

export class WorldPageCanvasComponent implements OnInit, AfterViewInit {
  // its important myCanvas matches the variable name in the template
  @ViewChild('worldScreen')
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  paintService: PaintService;
  title = 'WorldPageCanvas';
  world: World;
  coordinates: Coordinate[][];

  constructor(private _worldService: WorldService) { }

  ngAfterViewInit() {
    this.canvas = document.getElementById('worldScreen')! as HTMLCanvasElement;
    this.context = (this.canvas as HTMLCanvasElement).getContext('2d')!;
    this.paintService = new PaintService();
  }

  paintWorld() {
    for (let x = 1; x <= this.world.xSize; x++) {
      for (let y = 1; y <= this.world.ySize; y++) {
        this.paintService.paintCoordinate(this.context, this.coordinates[x][y]);
      }
    }
  }

  fillCoordinates(world: World) {
    this.coordinates = [];
    for (let x = 1; x <= world.xSize; x++) {
      this.coordinates[x] = [];
    }
    world.coordinates.forEach(coordinate => this.coordinates[coordinate.xCoord][coordinate.yCoord] = coordinate);
  }

  setCanvas() {
    this.context.canvas.width = this.world.xSize * 32;
    this.context.canvas.height = this.world.ySize * 32;
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  getWorld() {
    this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world');
        this.world = data;
        this.fillCoordinates(data);
        console.log('World size is ' + this.world.coordinates.length + ' coordinates.');
        console.log('x size = ' + this.world.xSize + ' y size = ' + this.world.ySize);
        this.setCanvas();
        this.paintWorld();
      });
  }

  ngOnInit() {
    this.getWorld();
    this.startTimer();
 }

  timerTime: number = 120;
  timeLeft: number = this.timerTime;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.timerTime;
        this.getWorld();
      }
    }, 1000)
  }
}

