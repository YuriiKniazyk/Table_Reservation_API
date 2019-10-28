exports.up = (knex) => {
    return knex.schema.createTable('table', table => {
        table.increments('id').primary();
        table.integer('tableCount').notNullable();
        table.integer('personCount').notNullable();
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('table');
};
