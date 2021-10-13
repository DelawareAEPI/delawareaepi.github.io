import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrotherhoodComponent } from './brotherhood/brotherhood.component';
import { HomeComponent } from './home/home.component';
import { RushComponent } from './rush/rush.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'brotherhood',
    component:BrotherhoodComponent
  },
  {
    path:'rush',
    component:RushComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
