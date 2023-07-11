import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '483765344',
  cityId: cityMock.id,
  complement: 'hebfiweuhf',
  createdAt: new Date(),
  id: 5454,
  numberAddress: 635,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
