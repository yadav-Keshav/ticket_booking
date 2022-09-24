const mongoose = require('mongoose');
const { DB_URL } = require('./env');
module.exports = connectDB = () => {
    mongoose.connect(DB_URL)
        .then((db) => { console.log(`sucefully Connected to : ${db.connection.host}`) })
        .catch((err) => {
            console.log(err.message);
            process.exit(1);
        })

}

