/*
Requirements
*/
    const mongoose = require('mongoose');
//

/*
Definition
*/
    const Schema = mongoose.Schema;
    let ArticleSchema = new Schema({
        title: String,
        description: String,
        content: String
    });
//

/*
Export
*/
    module.exports = ArticleSchema;
//