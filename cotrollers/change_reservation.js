const db = require('../dataBase/db')();

module.exports = async (req, res) => {
    try {
        
        const {id} = req.params;
        const {guestCount, dataTime, startReservation, endReservation} = req.body;
        
        await db('reservation').where({
            id
        }).update({
            guestCount,
            dataTime,
            startReservation,
            endReservation
        });    

        const idReservation = await db('reservation').where({
            id
        });

        res.status(200).json({
            succses: true,
            msg: 'ok',
            idReservation
        });

    } catch (e) {

        res.status(400).json({
            succses: false,
            msg: e.message
        });
    }
};
