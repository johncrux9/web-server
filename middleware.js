module.exports = {
    // runs before body of route it is protecting
    // next tells express to go ahead and run the routes, otherwise error and stop
    requireAuthentication: function (req, res, next) {
        console.log('private route hit! ');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toString() + ' ' + req.method + '' + req.originalUrl);
        next();
    }
};
