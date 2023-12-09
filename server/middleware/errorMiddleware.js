const apiError = require('../error/apiError');

module.exports = function (err, req, res, next) {
    if (err instanceof apiError) {
        return res.status(err.status).send(err.message);
    }
    return res.status(501).send("unpredictable error!");
}