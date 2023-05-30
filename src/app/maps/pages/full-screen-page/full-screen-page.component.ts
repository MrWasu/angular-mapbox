import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { GeoLocationService } from '../../services/geo-location.service';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  constructor(private geoLocationService: GeoLocationService) {}

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;

  public defaultLocation: LngLat = new LngLat(-3.787432122324759, 40.4056874952465);
  public zoom: number = 10;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.geoLocationService.getUserLocation()
    .then((lngLat) => {
      this.map = new Map({
        container: this.divMap!.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: lngLat,
        zoom: this.zoom,
      });
    })
    .catch( () => {
      this.map = new Map({
        container: this.divMap!.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: this.defaultLocation,
        zoom: this.zoom,
      });
    });

  }


}
