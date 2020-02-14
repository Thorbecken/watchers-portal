import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';

const routes: Routes = [
  {
    path: '',
    component: GameScreenComponent
  }
  ,
  {
    path: 'world-page',
    component: WorldPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
