import UserEntity from '@domain/entity/UserEntity';

export default interface UserRepository {
	create(user: UserEntity): Promise<UserEntity>;
	update(user: UserEntity): Promise<UserEntity>;
	findByEmail(email: string): Promise<UserEntity | null>;
}
