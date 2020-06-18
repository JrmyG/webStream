/*
Requirements
*/
    const express = require('express'),
        Article = require('../database/Schema').Article;
//

/*
Definition
*/
    const router = express.Router();

    // GET ALL articles
    router.get('/api',
    // require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        Article.find((err, data) => {
            if (err) {
                return (err);
            } else {
                res.json(data);
            }
        });
    });

    // GET ONE article
    router.get('/api/:id', 
        // require('connect-ensure-login').ensureLoggedIn(),
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

    // CREATE article
    router.post('/api/create', 
        // require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
        const article = new Article({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        });
        Article.create(article, (err, data) => {
            if (err) {
                return (err);
            } else {
                res.json(data);
            }
            }); 
        }
    );

    // UPDATE article
    router.put('/api/update/:id', 
        // require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            const article = new Article({
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                content: req.body.content
            });
            Article.findByIdAndUpdate({ _id: req.params.id }, article, 
                (err, data) => {
                    if (err) {
                        return (err);
                    } else {
                        res.json(data);
                        console.log('Student updated successfully !')
                    }
                }
            );
        }
    );

    // DELETE Article
    router.delete('/api/delete/:id', 
        // require('connect-ensure-login').ensureLoggedIn(),
        (req, res) => {
            Article.findByIdAndDelete({ _id: req.params.id }, 
                (err, data) => {
                if (err) {
                    return (err);
                } else {
                    res.status(200).json({
                        msg: data
                    })
                }
            });
        }
    );
//

/*
Export
*/
    module.exports = router
//