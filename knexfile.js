module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: 'root',
        password: process.env.DB_PASSWORD,
        charset: 'utf8',
        database:'tableReservation'
    }
};