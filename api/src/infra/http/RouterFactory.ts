import { Router, Application } from 'express';
import UserController from '@infra/http/controller/UserControllerImpl';
import QuestionController from '@infra/http/controller/QuestionControllerImpl';
import AnswerController from '@infra/http/controller/AnswerControllerImpl';

export default class RouterFactory {
	private userController: UserController;
	private questionController: QuestionController;
	private answerController: AnswerController;
	// UserController
	// QuestionController
	// AnswerController

	constructor() {
		this.answerController = new AnswerController();
		this.questionController = new QuestionController();
		this.userController = new UserController();
	}

	register(): Router {
		const router = Router();

		// QuestionController
		router.post('/question', this.questionController.create);
		router.post('/question/:questionId/answers', this.answerController.create);
		router.get('/question/:questionId/answers', this.answerController.list);
		router.delete('/question', this.questionController.delete);

		// UserController
		router.post('/user', this.userController.create);
		router.get('/user/:userId/questions', this.questionController.list);

		return router;
	}
}
