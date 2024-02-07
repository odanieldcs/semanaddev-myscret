export interface AnswerModel {
	answerId: string;
	questionId: string;
	userId: string | null;
	answer: string;
	createdAt: Date;
	updatedAt: Date | null;
}
