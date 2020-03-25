import {DefaultCrudRepository} from '@loopback/repository';
import {Mobil, MobilRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MobilRepository extends DefaultCrudRepository<
  Mobil,
  typeof Mobil.prototype.id,
  MobilRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mobil, dataSource);
  }
}
