import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { World, Tile } from 'src/app/shared/models/world';
import { WorldService } from 'src/app/services/world-service.service';


@Component({
  selector: 'world-page',
  templateUrl: './world-page.component.html',
  styleUrls: ['./world-page.component.css']
})

export class WorldPageComponent implements OnInit {
  title = 'WorldPage';
  public world: World;
  public tiles: Tile[][];
  @Output() currentSelectedTile = new EventEmitter<Tile>();
  
  
  constructor(private _worldService: WorldService) { }

  tileSelected(tile: Tile){
    this.currentSelectedTile.emit(tile);
  }

  ngOnInit() {
    this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = data
        console.log('World size is ' + this.world.tiles.length + ' tiles.')
        console.log('x size = ' +this.world.xsize + ' y size = ' + this.world.ysize)
        }
      );

      this.startTimer();
  } 


  timeLeft: number = 10;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;

        this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = data
        console.log('World size is ' + this.world.tiles.length + ' tiles.')
        console.log('x size = ' +this.world.xsize + ' y size = ' + this.world.ysize)
        }
      );
      }
    },1000)
  }
}
