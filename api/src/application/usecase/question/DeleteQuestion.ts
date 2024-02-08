import QuestionRepository from '@application/repository/QuestionRepository';
import Registry from '@infra/di/Registry';

export default class DeleteQuestion {
	private readonly questionRepository: QuestionRepository;

	constructor() {
		const registry = Registry.getInstance();
		this.questionRepository =
			registry.resolve<QuestionRepository>('QuestionRepository');
	}

	async execute(questionId: string): Promise<void> {
		await this.questionRepository.delete(questionId);
	}
}
