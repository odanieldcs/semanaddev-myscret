import { Request, Response } from 'express';
import AnswerController from '@application/controller/AnswerController';
import CreateAnswer from '@application/usecase/answer/CreateAnswer';
import ListAnswers from '@application/usecase/answer/ListAnswers';

export default class AnswerControllerImpl implements AnswerController {
	async create(request: Request, response: Response): Promise<void> {
		const { questionId } = request.params;
		const { answer, userId } = request.body;
		const answerData = { questionId, answer, userId: userId ?? null };
		const newAnswer = await new CreateAnswer().execute(answerData);
		response.status(201).json(newAnswer);
	}

	async list(request: Request, response: Response): Promise<void> {
		const { questionId } = request.params;
		const answers = await new ListAnswers().execute(questionId);
		response.status(200).json(answers);
	}
}
