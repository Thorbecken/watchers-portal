import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldPageComponent } from './modules/main/world-page/world-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorldPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
