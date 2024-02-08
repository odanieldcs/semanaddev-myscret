import QuestionRepository from '@application/repository/QuestionRepository';
import QuestionEntity from '@domain/entity/QuestionEntity';
import Registry from '@infra/di/Registry';

export default class CreateQuestion {
	private readonly questionRepository: QuestionRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.questionRepository =
			registry.resolve<QuestionRepository>('QuestionRepository');
	}

	async execute(
		questionData: InputCreateQuestion
	): Promise<OutputCreateQuestion> {
		const question = QuestionEntity.create(
			questionData.userId,
			questionData.question
		);
		await this.questionRepository.create(question);

		return {
			questionId: question.questionId,
			question: question.question,
			createdAt: question.createdAt,
		};
	}
}

type InputCreateQuestion = {
	question: string;
	userId: string;
};

type OutputCreateQuestion = {
	questionId: string;
	question: string;
	createdAt: Date;
};
