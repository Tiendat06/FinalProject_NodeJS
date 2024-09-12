const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('')
            .then(() => console.log('Connected !'));
    }catch (e){
        console.error(e)
    }
}

module.exports = { connect }