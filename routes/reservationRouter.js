const router = require('express').Router();
const createReservation = require('../cotrollers/create_reservation');
const getIdReservation = require('../cotrollers/get_id_reservation');
const delete_reservation = require('../cotrollers/delete_reservation');
const changeReservation = require('../cotrollers/change_reservation');

router.get('/reservations/:id', getIdReservation);
router.post('/reservations', createReservation);
router.put('/reservations/:id', changeReservation);
router.delete('/reservations/:id', delete_reservation);

module.exports = router;
