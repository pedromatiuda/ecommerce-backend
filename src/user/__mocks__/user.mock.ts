import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123123123',
  createdAt: new Date(),
  email: 'emailmock@gmail.com',
  id: 124334,
  name: 'nameMock',
  password: '$2b$10$Rndf.V6u89pmLNMzP7/IQuzQz0Hluo02ltIxRM8BYxdjqiiAh/58.',
  phone: '11192348494893',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
