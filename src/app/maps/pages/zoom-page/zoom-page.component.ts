import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';
import { GeoLocationService } from '../../services/geo-location.service';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrls: ['./zoom-page.component.css']
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  constructor(private geoLocationService: GeoLocationService) {}

  public zoom: number = 10;
  public map?: Map;

  public defaultLocation: LngLat = new LngLat(-4.779357455292853, 37.88582266939652);
  public currentLngLat: LngLat | undefined = this.defaultLocation


  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.geoLocationService.getUserLocation()
    .then((lngLat) => {
      this.map = new Map({
        container: this.divMap!.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: lngLat,
        zoom: this.zoom,
      });

      this.mapListeners();
    })
    .catch( () => {
      this.map = new Map({
        container: this.divMap!.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: this.defaultLocation,
        zoom: this.zoom,
      });

      this.mapListeners();
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      // Soluciona el error de zoom infinito
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    // sincroniza el zoom con el input
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}

