import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('users', (table) => {
		table.string('pictureUrl', 255).nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.table('users', (table) => {
		table.dropColumn('pictureUrl');
	});
}
