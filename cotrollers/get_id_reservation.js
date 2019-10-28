const db = require('../dataBase/db')();

module.exports = async (req, res) => {
    try {
        
        const {id} = req.params;
        
        const dataReservation = await db('reservation').where({
            id
        });                     

        res.status(200).json({
            succses: true,
            msg: 'ok',
            dataReservation
        });

    } catch (e) {

        res.status(400).json({
            succses: false,
            msg: e.message
        });
    }
};
