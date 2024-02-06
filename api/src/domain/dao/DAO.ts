export default interface DAO<T> {
	create(data: T): Promise<T>;
	findById(id: number): Promise<T>;
}
