import crypto from 'crypto';

export default class UUIDGenerator {
	static generate(): string {
		return crypto.randomUUID();
	}
}
