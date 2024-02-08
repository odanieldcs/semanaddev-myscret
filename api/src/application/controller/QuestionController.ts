export default interface QuestionController {
	create: (request: any, response: any) => Promise<void>;
	list: (request: any, response: any) => Promise<void>;
	delete: (request: any, response: any) => Promise<void>;
}
