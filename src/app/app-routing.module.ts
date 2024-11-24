import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';
import { WorldPageCanvasComponent } from './modules/main/world-page-canvas/world-page-canvas.component';
import { GameScreenBackgroundComponent } from './modules/main/game-screen-background/game-screen-background.component';

const routes: Routes = [
  {
    path: '',
    component: GameScreenComponent
  },
  {
    path: 'canvas',
    component: WorldPageCanvasComponent
  },
  {
    path: 'background',
    component: GameScreenBackgroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
