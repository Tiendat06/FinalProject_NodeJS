const mongoose = require('mongoose')
async function connect() {
    const mongoHost = process.env.MONGO_HOST || 'localhost';
    const mongoPort = process.env.MONGO_PORT || '27017';
    const mongoDB = process.env.MONGO_DB || 'nodejs_final';

    const mongoURI = `mongodb://${mongoHost}:${mongoPort}/${mongoDB}`;

    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log('Connected !'));
    }catch (e){
        console.error(e)
    }
}

module.exports = { connect }