const apiError = require("../error/apiError");
const {Children, Visits} = require("../models");
const {ObjectId} = require("mongodb");


class ChildController {
    async getChildren(req, res, next) {
        try {
            const {groupId} = req.body;
            let childrenWithVisits = [];
            const children = await Children.find({
                groupId: new ObjectId(groupId),
            }).toArray();

            for(let i = 0; i < children.length; i++) {
                const visits = await Visits.find({
                    childId: children[i]._id,
                }).toArray();
                let child = {...children[i]};
                child.visits = [...visits];
                childrenWithVisits.push(child);
            }

            res.json({children: childrenWithVisits});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async changeGroup(req, res, next) {
        try {
            const {childId, groupId} = req.body;
            await Children.updateOne({_id: new ObjectId(childId)}, {
                $set: {
                    groupId: new ObjectId(groupId),
                }
            })
            return res.send('Group have changed');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async exclude(req, res, next) {
        try {
            const {childId} = req.body;
            await Children.deleteOne({_id: new ObjectId(childId)});
            return res.send('Child have deleted');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async create(req, res, next) {
        try {
            const {name, birthday, parentId, groupId} = req.body;
            await Children.insertOne({
                name,
                birthday,
                parentId: new ObjectId(parentId),
                groupId: new ObjectId(groupId),
                balance: 0,
            })
            return res.send('Child have added');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getBalance(req, res, next) {
        try {
            const {childId} = req.body;
            const balance = await Children.findOne({
                childId,
            });
            return res.json({balance});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async changeBalance(req, res, next) {
        try {

        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getForParent(req, res, next) {
        try {
            const {id} = req.user;
            const children = await Children.find({
                parentId: new ObjectId(id),
            }).toArray();

            let childrenWithVisits = [];

            for(let i = 0; i < children.length; i++) {
                const visits = await Visits.find({
                    childId: children[i]._id,
                }).toArray();
                let child = {...children[i]};
                child.visits = [...visits];
                childrenWithVisits.push(child);
            }
            return res.json({children: childrenWithVisits});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }
}

module.exports = new ChildController();