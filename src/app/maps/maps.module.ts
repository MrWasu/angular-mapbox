import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw';

import { MinimapComponent } from './components/minimap/minimap.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/cards-page/cards-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { MapsRoutingModule } from './maps-routing.module';






@NgModule({
  declarations: [

    MinimapComponent,
    SideMenuComponent,
    MapLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomPageComponent,

  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
