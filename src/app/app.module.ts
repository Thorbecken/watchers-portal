import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';
import { WorldService } from './services/world-service.service';
import { XColumnPipePipe } from './pipes/x-column-pipe.pipe';
import { TileHolderComponent } from './modules/main/coordinate-holder/coordinate-holder.component';
import { ImageSelectorPipe } from './pipes/image-selector.pipe';
import { SanitizedImagePipe } from './pipes/sanitized-image.pipe';
import { ActorImageSelectorPipe } from './pipes/actor-image-selector.pipe';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';
import { TopMenuComponent } from './modules/main/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    WorldPageComponent,
    XColumnPipePipe,
    TileHolderComponent,
    ImageSelectorPipe,
    SanitizedImagePipe,
    ActorImageSelectorPipe,
    GameScreenComponent,
    TopMenuComponent
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
