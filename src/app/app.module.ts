import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';
import { WorldPageBackgroundComponent } from './modules/main/world-page-background/world-page-background.component';
import { XColumnPipePipe } from './pipes/x-column-pipe.pipe';
import { TileHolderComponent } from './modules/main/coordinate-holder/coordinate-holder.component';
import { TileHolderBackgroundComponent } from './modules/main/coordinate-holder-background/coordinate-holder-background.component';
import { SanitizedImagePipe } from './pipes/sanitized-image.pipe';
import { ActorImageSelectorPipe } from './pipes/actor-image-selector.pipe';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';
import { GameScreenBackgroundComponent } from './modules/main/game-screen-background/game-screen-background.component';
import { TopMenuComponent } from './modules/main/top-menu/top-menu.component';
import { ContinentalColoringPipe } from './pipes/continental-coloring.pipe';
import { SanitizedGifPipe } from './pipes/sanitized-gif.pipe';
import { RiverSelectorPipe } from './pipes/terain/river-selector.pipe';
import { SnowSelectorPipe } from './pipes/terain/snow-selector.pipe';
import { WaterSelectorPipe } from './pipes/terain/water-selector.pipe';
import { GrassSelectorPipe } from './pipes/terain/grass-selector.pipe';
import { TreeSelectorPipe } from './pipes/terain/tree-selector.pipe';
import { EarthSelectorPipe } from './pipes/terain/earth-selector.pipe';
import { FlowDirectionColoringPipe } from './pipes/flow-direction-coloring.pipe';
import { PointOfInterestSelectorPipe } from './pipes/point-of-interest.pipe';
import { RainMoistureColoringPipe } from './pipes/rain-moisture-coloring.pipe';
import { AirMoistureColoringPipe } from './pipes/air-moisture-coloring.pipe';
import { PlantBiomassColoringPipe } from './pipes/plant-biomass-coloring.pipe';
import { SpriteEarthSelectorPipe } from './pipes/terain/sprite-earth-selector.pipe';
import { PixelPipe } from './pipes/pixel-pipe';
import { WorldPageCanvasComponent } from './modules/main/world-page-canvas/world-page-canvas.component';
import { SpriteWaterSelectorPipe } from './pipes/terain/sprite-water-selector.pipe';
import { SpriteGrassSelectorPipe } from './pipes/terain/sprite-grass-selector.pipe';
import { SpritePointOfInterestSelectorPipe } from './pipes/sprite-point-of-interest.pipe';
import { SpriteSnowSelectorPipe } from './pipes/terain/sprite-snow-selector.pipe';
import { SpriteActorImageSelectorPipe } from './pipes/sprite-actor-image-selector.pipe';
import { SpriteTreeSelectorPipe } from './pipes/terain/sprite-tree-selector-pipe';
import { ColumnPipe } from './pipes/column-pipe.pipe';
import { MapPipe } from './pipes/map-pipie.pipe';
import { FaunaFloraModalComponent } from './modules/main/fauna-flora-modal/fauna-flora-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    WorldPageComponent,
    WorldPageBackgroundComponent,
    XColumnPipePipe,
    WorldPageCanvasComponent,
    TileHolderComponent,
    TileHolderBackgroundComponent,
    SnowSelectorPipe,
    WaterSelectorPipe,
    RiverSelectorPipe,
    GrassSelectorPipe,
    TreeSelectorPipe,
    EarthSelectorPipe,
    SanitizedImagePipe,
    SanitizedGifPipe,
    ActorImageSelectorPipe,
    GameScreenComponent,
    GameScreenBackgroundComponent,
    TopMenuComponent,
    ContinentalColoringPipe,
    FlowDirectionColoringPipe,
    RainMoistureColoringPipe,
    AirMoistureColoringPipe,
    PlantBiomassColoringPipe,
    PointOfInterestSelectorPipe,
    SpriteEarthSelectorPipe,
    SpriteWaterSelectorPipe,
    SpriteGrassSelectorPipe,
    SpritePointOfInterestSelectorPipe,
    SpriteSnowSelectorPipe,
    SpriteActorImageSelectorPipe,
    SpriteTreeSelectorPipe,
    PixelPipe,
    ColumnPipe,
    MapPipe,
    FaunaFloraModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
