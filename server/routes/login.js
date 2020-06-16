/*
Requirements
*/
    const express = require('express');
    const passport = require('passport');
//

/*
Definition
*/
    const router = express.Router();

    router.get('/',
        require('connect-ensure-login').ensureLoggedOut(),
        (req, res) => {
            res.render('login', {
                user: null,
                errors: {
                    email: req.flash('email'),
                    password: req.flash('password')
                }
            });
        }
    );
    
    router.post('/', passport.authenticate('localLogin', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
//

/*
Export
*/
    module.exports = router;
//