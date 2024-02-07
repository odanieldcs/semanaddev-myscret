import knex, { Knex as KnexType } from 'knex';
import { AnswerModel, QuestionModel, UserModel } from '@domain/model';
import DatabaseConnection from './DatabaseConnection';

export default class KnexAdapter implements DatabaseConnection {
	private connection: KnexTypeAdapter;

	constructor() {
		this.connection = {} as KnexTypeAdapter;
	}

	connect(): Promise<void> {
		try {
			this.connection = knex({
				client: 'pg',
				connection: {
					host: process.env.DB_HOSTNAME,
					user: process.env.DB_USERNAME,
					password: process.env.DB_PASSWORD,
					database: process.env.DB_NAME,
					port: 5432,
				},
			});

			return Promise.resolve();
		} catch (error) {
			throw new Error('Error connecting to database.');
		}
	}

	disconnect(): Promise<void> {
		return this.connection.destroy();
	}

	get instance(): KnexTypeAdapter {
		return this.connection;
	}
}

interface DatabaTables {
	answers: AnswerModel;
	questions: QuestionModel;
	users: UserModel;
}

export enum DatabaseTableNames {
	ANSWERS = 'answers',
	QUESTIONS = 'questions',
	USERS = 'users',
}

export type KnexTypeAdapter = KnexType<DatabaTables>;
