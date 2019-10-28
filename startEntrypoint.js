/* eslint no-console: off */
const Knex = require('knex');
const fs = require('fs');

(async function launch(){
    console.log('Connecting to MySQL '+process.env.DB_HOST);
    function generateKnexConfig() {
        return new Promise(async (resolve, reject) => {            
            const knex = Knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER_ROOT,
                    password: process.env.DB_PASSWORD_ROOT,
                    charset: 'utf8',
                    database:'mysql'
                }
            });
            try {
                await knex.raw('create database if not exists tableReservation');
                await knex.raw(`create user if not exists 'root'@'localhost' identified by '${process.env.DB_PASSWORD}'`);
                await knex.raw('grant REFERENCES, select, insert, update, delete, create, drop, alter, create temporary tables, lock tables on tableReservation.* to \'root\'@\'localhost\'');
            } catch(err) {
                return reject(err);
            }
            fs.writeFile('./knexfile.js', `module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: 'root',
        password: process.env.DB_PASSWORD,
        charset: 'utf8',
        database:'tableReservation'
    }
};`, (err) => {
                if(err) return reject(err);
                resolve(knex.destroy());
            });
        });
    }
    try {
        let firstRun = false;
        if(!fs.existsSync('./knexfile.js')) firstRun = true;        
        if(firstRun) await generateKnexConfig();
        const knex = require('knex')(require('./knexfile.js'));
        const migrations = await knex.migrate.latest();
        console.log(`Batch ${migrations[0]} run ${migrations[1].join('\n')}`);
        if(firstRun) {
            const seeds = await knex.seed.run();
            console.log(`Seeds: ${seeds[0].join('\n')}`);
        }
        require('./app.js');
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
})();
