import QuestionRepository from '@application/repository/QuestionRepository';
import Registry from '@infra/di/Registry';

export default class ListQuestion {
	private readonly questionRepository: QuestionRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.questionRepository =
			registry.resolve<QuestionRepository>('QuestionRepository');
	}

	async execute(userId: string): Promise<OutputListQuestion[]> {
		const questions = await this.questionRepository.list(userId);

		const outputQuestions = questions.map((question) => ({
			questionId: question.questionId,
			question: question.question,
			createdAt: question.createdAt,
		}));

		return outputQuestions;
	}
}

type OutputListQuestion = {
	questionId: string;
	question: string;
	createdAt: Date;
};
