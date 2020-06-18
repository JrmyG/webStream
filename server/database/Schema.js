/*
Requirement
*/
    let mongoose = require('mongoose');
//

/*
Export
*/
    exports.User = mongoose.model('User', require('./UserSchema'));
    exports.Article = mongoose.model('Article', require('./ArticleSchema'));
//