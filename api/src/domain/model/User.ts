export interface UserModel {
	userId: number;
	name: string | null;
	email: string;
	password: string;
	pictureUrl: string | null;
	created_at: Date;
	updated_at: Date;
}
