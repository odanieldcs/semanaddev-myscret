import UUIDGenerator from './UUIDGenerator';

export default class UserEntity {
	constructor(
		readonly userId: string,
		readonly name: string | null,
		readonly email: string,
		readonly password: string,
		readonly pictureUrl: string | null,
		readonly createdAt: Date,
		readonly updatedAt: Date | null
	) {}

	static create(email: string, password: string): UserEntity {
		const userId = UUIDGenerator.generate();
		const createdAt = new Date();

		return new UserEntity(userId, null, email, password, null, createdAt, null);
	}
}
