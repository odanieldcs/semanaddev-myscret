import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('questions', (table) => {
		table.uuid('questionId').primary();
		table.string('question').notNullable();
		table.uuid('userId').notNullable().references('userId').inTable('users');
		table.timestamp('createdAt').defaultTo(knex.fn.now());
		table.timestamp('updatedAt').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('questions');
}
