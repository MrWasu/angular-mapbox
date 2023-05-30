import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  public userLocation: LngLat | undefined

  get isUserLocationReady(): boolean {
    return !!this.userLocation
  }

  constructor() { 
    this.getUserLocation()
  }

  async getUserLocation(): Promise<LngLat> {

    return new Promise((res, rej) => {

      navigator.geolocation.getCurrentPosition(

        ({ coords }) => {
          const lnglat = new LngLat(coords.longitude, coords.latitude)
          this.userLocation = lnglat
          res(lnglat)
        },
        ( error ) => {
          console.log(error)
          rej()
        }
        
      )
    })
  }
}


