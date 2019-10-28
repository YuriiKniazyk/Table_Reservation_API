const config = require('../constant/config.json');
const knex = require('knex')(require(config.knexfile));

module.exports = () => {
    return knex;
};
