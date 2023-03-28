import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';
import { XColumnPipePipe } from './pipes/x-column-pipe.pipe';
import { TileHolderComponent } from './modules/main/coordinate-holder/coordinate-holder.component';
import { SanitizedImagePipe } from './pipes/sanitized-image.pipe';
import { ActorImageSelectorPipe } from './pipes/actor-image-selector.pipe';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';
import { TopMenuComponent } from './modules/main/top-menu/top-menu.component';
import { ContinentalColoringPipe } from './pipes/continental-coloring.pipe';
import { SanitizedGifPipe } from './pipes/sanitized-gif.pipe';
import { RiverSelectorPipe } from './pipes/terain/river-selector.pipe';
import { SnowSelectorPipe } from './pipes/terain/snow-selector.pipe';
import { WaterSelectorPipe } from './pipes/terain/water-selector.pipe';
import { GrassSelectorPipe } from './pipes/terain/grass-selector.pipe';
import { TreeSelectorPipe } from './pipes/terain/tree-selector.pipe';
import { EarthSelectorPipe } from './pipes/terain/earth-selector.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    WorldPageComponent,
    XColumnPipePipe,
    TileHolderComponent,
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
    TopMenuComponent,
    ContinentalColoringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
