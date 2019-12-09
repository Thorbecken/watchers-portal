import { Component, OnInit } from '@angular/core';
import { World, Tile, Coordinate } from 'src/app/shared/models/world';
import { WorldService } from 'src/app/services/world-service.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-world-page',
  templateUrl: './world-page.component.html',
  styleUrls: ['./world-page.component.css']
})

export class WorldPageComponent implements OnInit {
  title = 'WorldPage';
  public world: World;
  //public tileMap: Map<Coordinate, Tile>;
  //public divMap: HTMLDivElement;

  constructor(private _worldService: WorldService) { }

  ngOnInit() {
    this._worldService.getWorld("1")
      .subscribe(data => {
        console.log('setting world')
        this.world = data
        console.log('World size is ' + this.world.tiles.length + ' tiles.')
        console.log('x size = ' +this.world.xSize + ' ysize = ' + this.world.ySize)
        }
      );

 /*
      this.divMap = document.createElement("div");

      for(let x = 1; x <= maxX; x++){
        let xRow: HTMLDivElement = document.createElement("div");
        for(let y = 1; y <= maxY; y++){
          let coordinate = new Coordinate;
          coordinate.xCoord = x;
          coordinate.yCoord = y; 
          this.tileMap.get(coordinate);          

          let yDiv: HTMLDivElement = document.createElement("div");
          let button: HTMLButtonElement = document.createElement("button");
          button.onclick = function(){
            //doSomething
            //https://www.c-sharpcorner.com/UploadFile/5089e0/dynamically-add-elements-in-web-form-using-typescript/
          }
          yDiv.appendChild(button);
          xRow.appendChild(yDiv);
        }
      }*/
  } 
}
