import {Entity, model, property} from '@loopback/repository';

@model()
export class Mobil extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  platnomor: string;

  @property({
    type: 'number',
    required: true,
  })
  jumlahkursi: number;

  @property({
    type: 'string',
    required: true,
  })
  tipemobil: string;


  constructor(data?: Partial<Mobil>) {
    super(data);
  }
}

export interface MobilRelations {
  // describe navigational properties here
}

export type MobilWithRelations = Mobil & MobilRelations;
