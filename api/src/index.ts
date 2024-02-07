import LoadEnv from '@infra/helper/LoadEnv';
import UserEntity from '@domain/entity/UserEntity';
import UserDAO from '@infra/database/dao/UserDAO';
import KnexAdapter from '@infra/database/KnexAdapter';
import UUIDGenerator from '@domain/entity/UUIDGenerator';
import ExpressAdapter from '@infra/http/ExpressAdapter';
import Registry from '@infra/di/Registry';
import UserRepositoryImpl from '@infra/database/repository/UserRepositoryImpl';

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryImpl(userDAO);

const registry = Registry.getInstance();
registry.register('UserRepository', userRepository);

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3000);

// Route > Controller > UseCase > <Entity>Repository<Model> > DAO

// const knexAdapter = new KnexAdapter();
// knexAdapter.connect();
// const userDAO = new UserDAO(knexAdapter.instance);
// userDAO.create({
// 	userId: UUIDGenerator.generate(),
// 	name: null,
// 	email: 'teste@teste.com',
// 	password: '123',
// 	pictureUrl: null,
// 	createdAt: new Date(),
// 	updatedAt: null,
// });
