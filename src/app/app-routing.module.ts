import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicComponent } from './academic/academic.component';
import { BrotherhoodComponent } from './brotherhood/brotherhood.component';
import { CompositeComponent } from './composite/composite.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { RushComponent } from './rush/rush.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'brotherhood',
    component:BrotherhoodComponent
  },
  {
    path:'brothers',
    component:CompositeComponent
  },
  {
    path:'history',
    component:HistoryComponent
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
