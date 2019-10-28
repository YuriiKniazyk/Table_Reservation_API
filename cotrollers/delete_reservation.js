const db = require('../dataBase/db')();

module.exports = async (req, res) => {
    try {
        
        const {id} = req.params;

        await db('reservation').where({
            id
        }).del();                      

        res.status(200).json({
            succses: true,
            msg: 'ok',
        });

    } catch (e) {

        res.status(400).json({
            succses: false,
            msg: e.message
        });
    }
};
