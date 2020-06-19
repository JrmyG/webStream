/*
Requirements
*/
    const express = require('express'),
        User = require('../database/Schema').User;
//

/*
Definition
*/
    const router = express.Router();
    router.get('/',
        require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            if(req.query.username){
                User.findOne({
                    username : req.query.username
                },(err, user) => {
                    if (err)
                        return;
                    if (user) {
                        res.json({
                            stream_key : user.stream_key
                        });
                    }
                });
            }else{
                res.json({});
            }
        }
    );

    router.get('/api', 
        // require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            User.find((err, data) => {
                if (err) {
                    return (err);
                } else {
                    res.json(data);
                }
            }
        );
    })
//

/*
Export
*/
    module.exports = router;
//