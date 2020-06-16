/*
Requirements
*/
    const mongoose = require('mongoose');
//

/*
Export
*/
    exports.User = mongoose.model('User', require('./UserSchema'));
//