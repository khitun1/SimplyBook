const apiError = require("../error/apiError");
const {PlanPayments, Periods, Groups} = require("../models");
const {ObjectId} = require("mongodb");


class PlanPaymentController {
    async getPlan(req, res, next) {
        try {
            const {month, groupId} = req.body;
            let year = new Date().getFullYear();
            if (month === 1) {
                year++;
            }
            const periodId = (await Periods.findOne({
                month,
                year
            }))._id;
            const plan = await PlanPayments.findOne({
                periodId: new ObjectId(periodId),
                groupId: new ObjectId(groupId),
            });
            return res.json({plan});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async setPlan(req, res, next) {
        try {
            const {month, sum, groupId, orgId} = req.body;
            let year = new Date().getFullYear();
            if (month === 1) {
                year++;
            }
            const periodId = (await Periods.findOne({
                month,
                year
            }))._id;
            if (!groupId) {
                const groups = await Groups.find({
                    orgId: orgId,
                }).toArray();
                groups.map(async(p) => {
                    await PlanPayments.insertOne({
                        periodId,
                        sum,
                        groupId: new ObjectId(p._id),
                    });
                })
            }
            else {
                await PlanPayments.deleteMany({
                    periodId: new ObjectId(periodId),
                    groupId: new ObjectId(groupId),
                })
                await PlanPayments.insertOne({
                    periodId: new ObjectId(periodId),
                    sum,
                    groupId: new ObjectId(groupId),
                });
            }
            return res.send('Plan have changed');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getInvoices(req, res, next) {
        try {
            const {start, end, childId} = req.body;
            const invoices = await PlanPayments.find({
                date: {
                    $gt: {
                        start,
                    },
                    $lt: {
                        end,
                    }
                },
                childId
            })
            return res.json({invoices});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

}

module.exports = new PlanPaymentController();