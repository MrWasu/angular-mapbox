import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/cards-page/cards-page.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';


const routes: Routes = [
  {
    path: '',
    component: MapLayoutComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent },
      { path: 'zoom-range', component: ZoomPageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
