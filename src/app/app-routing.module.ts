import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { BrotherhoodComponent } from './brotherhood/brotherhood.component';
import { ContactComponent } from './contact/contact.component';
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
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'academic',
    component:AcademicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
