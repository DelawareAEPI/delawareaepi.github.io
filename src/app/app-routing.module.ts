import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicComponent } from './pages/academic/academic.component';
import { BrotherhoodComponent } from './pages/brotherhood/brotherhood.component';
import { CompositeComponent } from './pages/composite/composite.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { PhilanthropyComponent } from './pages/philanthropy/philanthropy.component';
import { RushComponent } from './pages/rush/rush.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

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
    path: "philanthropy",
    component: PhilanthropyComponent

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
    path:'gallery/:year',
    component:GalleryComponent
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
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',  scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
