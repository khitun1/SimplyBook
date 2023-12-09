const apiError = require("../error/apiError");
const {Periods} = require("../models");


class PeriodController {
    async createPeriod(req, res, next) {
        try {
            const {month} = req.body;
            let year = new Date().getFullYear();
            if (month === 1) {
                year++;
            }
            const isPeriod = await Periods.findOne({
                month, year,
            })
            if (isPeriod === null) {
                await Periods.insertOne({
                    month, year
                });
            }
            res.send('Period have created');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }
}

module.exports = new PeriodController();