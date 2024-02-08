import AnswerRepository from '@application/repository/AnswerRepository';
import AnswerEntity from '@domain/entity/AnswerEntity';
import { AnswerModel } from '@domain/model';
import AnswerDAO from '@infra/database/dao/AnswerDAO';

export default class AnswerRepositoryImpl implements AnswerRepository {
	constructor(private readonly answerDAO: AnswerDAO) {}

	private toModel(answer: AnswerEntity): AnswerModel {
		return {
			answerId: answer.answerId,
			questionId: answer.questionId,
			userId: answer.userId,
			answer: answer.answer,
			createdAt: answer.createdAt,
			updatedAt: answer.updatedAt,
		};
	}

	private toEntity(answer: AnswerModel): AnswerEntity {
		return new AnswerEntity(
			answer.answerId,
			answer.questionId,
			answer.userId,
			answer.answer,
			answer.createdAt,
			answer.updatedAt
		);
	}

	async create(answer: AnswerEntity): Promise<AnswerEntity> {
		await this.answerDAO.create(this.toModel(answer));
		return answer;
	}

	async list(questionId: string): Promise<AnswerEntity[]> {
		const answers = await this.answerDAO.list(questionId);
		return answers.map((answer) => this.toEntity(answer));
	}
}
