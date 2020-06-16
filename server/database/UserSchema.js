/*
Requirements
*/
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt-nodejs');
    const shortid = require('shortid');
//

/*
Definition
*/
    const Schema = mongoose.Schema;
    let UserSchema = new Schema({
        userName: String,
        email: String,
        password: String,
        stream_key: String
    });

    // Convert text Password to Bcrypt Hash
    UserSchema.methods.generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // Compare Entered Password and the existing Password in the BDD
    UserSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Generate Unique StreamKey
    UserSchema.methods.generateStreamKey = () => {
        return shortid.generate();
    };
//

/*
Export
*/
    module.exports = UserSchema;
//