import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';
import { GeoLocationService } from '../../services/geo-location.service';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[]
}


@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  constructor(private geoLocationService: GeoLocationService) {}

  public markers: MarkerAndColor[] = [];

  public map?: Map;
  public defaultLocation: LngLat = new LngLat(-4.779357455292853, 37.88582266939652)

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.defaultLocation,
      zoom: 13
    });

    this.loadFromLocalStorage();

  }

  createMarker() {
    if ( !this.map ) return;

    // Genera un hexadecimal de manera aleatoria
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const lngLat = this.map.getCenter();

    this.addMarker( lngLat, color );
  }


  addMarker( lngLat: LngLat, color: string ) {
    if ( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true // permite mover el marcador
    })
      .setLngLat( lngLat )
      .addTo( this.map );

    this.markers.push({ color, marker, });

    this.saveToLocalStorage();

    // cuando sueltas un marcador:
    marker.on('dragend', () => this.saveToLocalStorage() );

  }

  deleteMarker( index: number ) {
    // se borra mediante el doble click
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( marker: Marker ) {
    // mueve la posicion hacia el marcador
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });

  }


  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray() // toArray es propio de Mapbox
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));

  }

  loadFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString ); 

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat );

      this.addMarker( coords, color );
    })

  }


}
