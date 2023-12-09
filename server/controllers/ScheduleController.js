const {Schedules, Periods, Groups, Children} = require("../models");
const apiError = require("../error/apiError");
const {ObjectId} = require("mongodb");


class ScheduleController{
    async setSchedule(req, res, next) {
        try {
            const {groupId, schedule, month} = req.body;
            let year = new Date().getFullYear();
            if (month === 1) {
                year++;
            }
            const periodId = (await Periods.findOne({
                month,
                year
            }))._id;
            await Schedules.deleteMany({
                groupId: new ObjectId(groupId),
                periodId: new ObjectId(periodId),
            })
            await Schedules.insertOne({
                groupId: new ObjectId(groupId),
                schedule,
                periodId: new ObjectId(periodId),
            });
            return res.send('Schedule have been changed');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getSchedule(req, res, next) {
        try {
            const {groupId, month, year} = req.body;
            const periodId = (await Periods.findOne({
                month, year
            }))._id;
            const schedule = (await Schedules.findOne({
                groupId: new ObjectId(groupId),
                periodId: new ObjectId(periodId),
            }));
            if (schedule){
                return  res.json({schedule: schedule.schedule});
            }
            return  res.json({schedule: []});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getScheduleForChild(req, res, next) {
        try {
            const {childId, month, year} = req.body;
            const periodId = (await Periods.findOne({
                month, year
            }))._id;
            const child = await Children.findOne({
                _id: new ObjectId(childId),
            })
            const group = await Groups.findOne( {
                _id: new ObjectId(child.groupId),
            })
            const schedule = (await Schedules.findOne({
                groupId: group._id,
                periodId: new ObjectId(periodId),
            })).schedule;
            return  res.json({schedule});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }


}

module.exports = new ScheduleController();