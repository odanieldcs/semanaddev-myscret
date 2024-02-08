import AnswerRepository from '@application/repository/AnswerRepository';
import Registry from '@infra/di/Registry';

export default class ListAnswers {
	private readonly answerRepository: AnswerRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.answerRepository =
			registry.resolve<AnswerRepository>('AnswerRepository');
	}

	async execute(questionId: string): Promise<OutputListAnswers[]> {
		const answers = await this.answerRepository.list(questionId);
		const output = answers.map((answer) => ({
			answerId: answer.answerId,
			userId: answer.userId,
			answer: answer.answer,
			createdAt: answer.createdAt,
		}));
		return output;
	}
}

type OutputListAnswers = {
	answerId: string;
	userId: string | null;
	answer: string;
	createdAt: Date;
};
