if(process.env.NODE_ENV === 'test')
    module.exports = require('./test.json');
else
    module.exports = require('./config.json');
