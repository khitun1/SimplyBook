const apiError = require("../error/apiError");
const {Visits, Periods} = require("../models");
const {ObjectId} = require("mongodb");


class VisitController {
    async setVisit(req, res, next) {
        try {
            const {mark, childId, date} = req.body;
            const month = Number(date.split('.')[1]);
            const year = Number(date.split('.')[2]);
            // let year = date.getFullYear();
            // if (month === 1) {
            //     year++;
            // }
            const periodId = (await Periods.findOne({
                month, year,
            }))._id;
            await Visits.deleteOne({
                childId: new ObjectId(childId),
                date,
            })
            await Visits.insertOne({
                childId: new ObjectId(childId),
                mark,
                date,
                periodId: new ObjectId(periodId)
            })

            return res.send('Have marked');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getVisits(req, res, next) {
        try {
            const {month, year, childId} = req.body;
            const periodId = await (await Periods.findOne({
                month, year
            }))._id;
            const visits = await Visits.find( {
                periodId: new ObjectId(periodId),
                childId: new ObjectId(childId)
            })
            return res.json({visits});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }
}

module.exports = new VisitController();