/*
Requirements
*/
    const mongoose = require('mongoose'),
        bcrypt   = require('bcrypt-nodejs'),
        shortid = require('shortid');
//

/*
Definition
*/
    const Schema = mongoose.Schema;
    let UserSchema = new Schema({
        username: String,
        email : String,
        password: String,
        image_url: String,
        stream_key : String,
    });

    UserSchema.methods.generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    UserSchema.methods.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
    };

    UserSchema.methods.generateStreamKey = () => {
        return shortid.generate();
    };

    UserSchema.methods.randomPicture = () => {
        const colorArray = ["https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png", 
            "https://www.ultimedecathlon.com/images/users/avatars/418.png?20200220", 
            "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png", 
            "https://www.ultimedecathlon.com/images/users/avatars/1035.png?20200220", 
            "https://www.ultimedecathlon.com/images/users/avatars/1174.png?20200220"];
        let random = colorArray[Math.floor(Math.random()*colorArray.length)];
        return random;
    }
//

/*
Export
*/
    module.exports = UserSchema;
//