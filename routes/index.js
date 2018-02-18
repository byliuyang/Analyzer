const express = require('express');
const router = express.Router();
const Wappalyzer = require('wappalyzer');

router.get('/:url/technologies?', function (req, res, next) {
    const options = {
        debug: false,
        delay: req.query.delay || 500,
        maxDepth: req.query.maxDepth || 1,
        maxUrls: req.query.maxUrls || 10,
        maxWait: req.query.maxWait || 1000,
        recursive: req.query.recursive || true,
        userAgent: req.query.userAgent || 'Wappalyzer'
    };

    const wappalyzer = new Wappalyzer(req.params.url, options);

    wappalyzer.analyze()
        .then(json => {
            let applications = json.applications.map(application => ({
                name: application.name,
                version: application.version,
                icon: application.icon,
                website: application.website
            }));
            res.write(JSON.stringify(applications));
            res.end();
        })
        .catch(error => {
            res.status(500);
            res.end();
        });
});

module.exports = router;
