const db = require('../dataBase/db')();

module.exports = async (req, res) => {
    try {
        
        const {guestCount, dataTime, startReservation, endReservation} = req.body;

        if(!guestCount || !dataTime || !startReservation || !endReservation) throw new Error('Some field is empty');
        
        await db('reservation').insert({
                guestCount,
                dataTime,
                startReservation,
                endReservation
            });                      

        res.status(200).json({
            succses: true,
            msg: 'Reservation created!',
        });

    } catch (e) {

        res.status(404).json({
            succses: false,
            msg: e.message
        });
    }
};