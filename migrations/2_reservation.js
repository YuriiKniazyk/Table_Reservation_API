exports.up = (knex) => {
    return knex.schema.createTable('reservation', table => {
        table.increments('id').primary();
        table.integer('guestCount').notNullable();
        table.string('dataTime').notNullable();
        table.integer('startReservation').notNullable();
        table.integer('endReservation').notNullable();
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('reservation');
};
