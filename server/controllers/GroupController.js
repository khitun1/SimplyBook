const {Groups} = require("../models");
const apiError = require("../error/apiError");
const {ObjectId} = require("mongodb");


class GroupController {
    async getGroups(req, res, next) {
        try {
            const {id} = req.body;
            const groups = await Groups.find({orgId: id}).toArray();
            return res.json({groups});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getGroupsForTeacher (req, res, next) {
        try {
            const {id} = req.user;
            const groups = await Groups.find({
                teachersId: new ObjectId(id),
                }).toArray();
            return res.json({groups});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async create(req, res, next) {
        try {
            const {name, orgId} = req.body;
            await Groups.insertOne({name, orgId, teachersId: []});
            const group = await Groups.findOne({name, orgId});
            return res.json({id: new ObjectId(group._id)});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async changeTeachers(req, res, next) {
        try {
           const {teacherId, groupId, action} = req.body;
           if (action === 'add') {
               await Groups.updateOne({_id: new ObjectId(groupId)}, {
                   $push: {
                       teachersId: new ObjectId(teacherId),
                   }
               })
           }
           else {
               // const groups = await Groups.findOne({_id: new ObjectId(groupId)});
               // console.log(groups)
               // console.log(new ObjectId(teacherId))
               await Groups.updateOne({_id: new ObjectId(groupId)}, {
                   $pull: {
                       teachersId: new ObjectId(teacherId),
                   }
               });
           }
           return res.send('Groups have changed');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async delGroup(req, res, next) {
        try {
            const {id} = req.body;
            await Groups.deleteOne({_id: id});
            return res.send('Group have deleted');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

}

module.exports = new GroupController();