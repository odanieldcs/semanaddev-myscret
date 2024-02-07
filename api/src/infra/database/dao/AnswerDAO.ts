import {
	KnexTypeAdapter,
	DatabaseTableNames,
} from '@infra/database/KnexAdapter';
import { AnswerModel } from '@domain/model';
import DAO from '@domain/dao/DAO';

export default class AnswerDAO implements DAO<AnswerModel> {
	private readonly tableName: string = DatabaseTableNames.ANSWERS;

	constructor(private readonly connection: KnexTypeAdapter) {}

	async create(data: AnswerModel): Promise<AnswerModel> {
		const [savedAnswer] = await this.connection<AnswerModel>(this.tableName)
			.insert(data)
			.returning('*');

		return savedAnswer;
	}

	async findById(answerId: string): Promise<AnswerModel | null> {
		const data = await this.connection<AnswerModel>(this.tableName)
			.where({ answerId })
			.first();
		if (!data) return null;
		return data;
	}
}
