import AnswerRepository from '@application/repository/AnswerRepository';
import AnswerEntity from '@domain/entity/AnswerEntity';
import Registry from '@infra/di/Registry';

export default class CreateAnswer {
	private readonly answerRepository: AnswerRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.answerRepository =
			registry.resolve<AnswerRepository>('AnswerRepository');
	}

	async execute(answerData: InputCreateAnswer): Promise<OutputCreateAnswer> {
		const answer = AnswerEntity.create(
			answerData.questionId,
			answerData.userId,
			answerData.answer
		);
		await this.answerRepository.create(answer);

		return {
			answerId: answer.answerId,
			answer: answer.answer,
			createdAt: answer.createdAt,
		};
	}
}

type InputCreateAnswer = {
	questionId: string;
	answer: string;
	userId: string | null;
};

type OutputCreateAnswer = {
	answerId: string;
	answer: string;
	createdAt: Date;
};
