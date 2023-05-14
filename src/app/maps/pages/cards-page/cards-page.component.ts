import { Component } from '@angular/core';

interface Card {
  title: string;
  description: string;
  lngLat: [number, number];
}


@Component({
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css']
})
export class PropertiesPageComponent {

  public cards: Card[] = [
    {
      title: 'La Alhambra, Granada',
      description: 'Palacio y fortaleza de la época musulmana en Granada, Patrimonio de la Humanidad.',
      lngLat: [-3.588452, 37.176104]
    },
    {
      title: 'La Sagrada Familia, Barcelona',
      description: 'Basílica diseñada por Antoni Gaudí en Barcelona, en construcción desde 1882.',
      lngLat: [2.174432, 41.403633]
    },
    {
      title: 'La Giralda, Sevilla',
      description: 'Campanario almohade convertido en torre de la Catedral de Sevilla, símbolo de la ciudad.',
      lngLat: [-5.992757, 37.389258]
    },
    {
      title: 'El Escorial, Madrid',
      description: 'Monasterio y palacio construido en el siglo XVI por orden de Felipe II en San Lorenzo de El Escorial.',
      lngLat: [-4.138252, 40.590004]
    },
    {
      title: 'El Acueducto, Segovia',
      description: 'Construcción romana del siglo II en Segovia, considerado uno de los monumentos más importantes de España.',
      lngLat: [-4.118337, 40.948634]
    },
    {
      title: 'La Catedral de Santiago, Santiago de Compostela',
      description: 'Catedral de estilo románico, gótico y barroco en Santiago de Compostela, lugar de peregrinación desde la Edad Media.',
      lngLat: [-8.544003, 42.880215]
    },
    {
      title: 'La Lonja de la Seda, Valencia',
      description: 'Edificio gótico de finales del siglo XV en Valencia, declarado Patrimonio de la Humanidad.',
      lngLat: [-0.380912, 39.471423]
    },
    {
      title: 'El Teatro Romano, Mérida',
      description: 'Restos del teatro romano en Mérida, considerado uno de los teatros mejor conservados de la época.',
      lngLat: [-6.338605, 38.916968]
    }
  ];


}
