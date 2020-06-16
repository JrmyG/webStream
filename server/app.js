/*
Requirements
*/
    const express = require('express');
    const Session = require('express-session');
    const bodyParse = require('body-parser');
    const mongoose = require('mongoose');
    const middleware = require('connect-ensure-login');
    const FileStore = require('session-file-store')(Session);
    const config = require('./config/default');
    const flash = require('connect-flash');
    const { patch } = require('request');
    const passport = require('./auth/passport');
    const node_media_server = require('./media_server'); 
    const path = require('path');

    // Secret 
    const keys = require('./config/secret');
//

/*
Definition
*/
    // Init port
    port = 3333,
    app = express();

    // Connect Database
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, './views'));
    app.use(express.static('public'));
    app.use(flash());
    app.use(require('cookie-parser')());
    app.use(bodyParse.urlencoded({ extended: true }));
    app.use(bodyParse.json({ extended: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(Session({
        store: new FileStore({
            path: './server/sessions'
        }),
        secret: config.server.secret,
        maxAge: Date().now + (60 * 1000 * 30)
    }));

    app.get('*', middleware.ensureLoggedIn(), (req, res) => {
        res.render('index');
    });
//

/*
Export
*/
    node_media_server.run();
    app.listen(port, () => console.log(`App listening on port ${port}`));
//