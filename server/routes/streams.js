/*
Imports & Requirements
*/
    const express = require('express'),
        router = express.Router(),
        User = require('../database/Schema').User;
//

/*
Definition
*/
    router.get('/info',
        require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            if(req.query.streams){
                let streams = JSON.parse(req.query.streams);
                let query = {$or: []};
                for (let stream in streams) {
                    if (!streams.hasOwnProperty(stream)) continue;
                    query.$or.push({stream_key : stream});
                }

                User.find(query,(err, users) => {
                    if (err)
                        return;
                    if (users) {
                        res.json(users);
                    }
                });
            }
        }
    );

    router.get('/user',
        require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            Article.findById({
                _id: req.params.id
            }, (err, data) => {
                if (err) {
                    return (err);
                } else {
                    res.json(data);
                }
            }) 
        }
    );
//

/*
Export
*/
    module.exports = router;
//