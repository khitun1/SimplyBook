const {Payments, Groups, Children} = require("../models");
const apiError = require("../error/apiError");
const {ObjectId} = require("mongodb");


class PaymentController {
    async getPayments(req, res, next) {
        try {
            const {childId, orgId} = req.body;
            if (childId) {
                const payments = await Payments.find( {
                    childId: new ObjectId(childId),
                    // date: {
                    //     $gt: {
                    //         start,
                    //     },
                    //     $lt: {
                    //         end,
                    //     }
                    // }
                }).toArray();
                return res.json({payments})
            }

            const groups = await Groups.find({
                orgId,
            }).toArray();

            let children = [];

            for (let i = 0; i < groups.length; i++) {
                const childrenInGroup = await Children.find({
                    groupId: groups[i]._id,
                }).toArray();
                children.push(...childrenInGroup);
            }

            let payments = [];

            for (let i = 0; i < children.length; i++) {
                const childPayments = await Payments.find({
                    childId: children[i]._id,
                }).toArray();
                payments.push(...childPayments);
            }

            for (let i = 0; i < payments.length; i++) {
                const child = await Children.findOne({
                    _id: new ObjectId(payments[i].childId)
                })
                payments[i].name = child.name;
            }

            return res.json({payments});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async setPayment(req, res, next) {
        try {
           const {sum, childId, date, status} = req.body;
           await Payments.insertOne({
               sum,
               date,
               childId: new ObjectId(childId),
               status
           });
           const child = await Children.findOne({
               _id: new ObjectId(childId),
           })
           await Children.updateOne({
               _id: new ObjectId(childId)
           }, {
               $set: {
                   balance: child.balance + Number(sum),
               },
           })
           return res.send('Payment have provided');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

}

module.exports = new PaymentController();