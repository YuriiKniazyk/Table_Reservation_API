const express = require('express');
const app = express();
const config = require('./constant/config.json');
const error404 = require('./cotrollers/error404');
const reservationRouter = require('./routes/reservationRouter');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) =>  res.json('HI From Table_Reservation_Api'));
app.use('/api', reservationRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
app.use('*', error404);

app.listen(config.port, err => {
  console.log('Server listen on port ' + config.port + '...');

});
