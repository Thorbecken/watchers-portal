import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';
import { GameScreenComponent } from './modules/main/game-screen/game-screen.component';

const routes: Routes = [
  {
    path: '',
    component: GameScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
