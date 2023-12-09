const {Organizations, Groups, Children} = require("../models");
const apiError = require("../error/apiError");
const {ObjectId} = require("mongodb");


class OrganizationController {
    async create(req, res, next) {
        try {
            const {name, description, requisites} = req.body;
            const id = req.user.id;
            await Organizations.insertOne({name, description, requisites, ownerId: id, users: []});
            return res.send('Organization have created');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async changeRequisites(req, res, next) {
        try {
            const {id, requisites} = req.body;
            await Organizations.updateOne({_id: new ObjectId(id)}, {
                $set: {
                    requisites,
                }
            })
            return res.send('Requisites have changed');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getOrganization(req, res, next) {
        try {
            const {id} = req.body;
            const organization = await Organizations.find({ownerId: id});
            return res.json({organization});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getOrganizations(req, res, next) {
        try {
            const {id} = req.user;
            const organizations = await Organizations.find({ownerId: id}).toArray();
            return res.json({organizations});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getOrganizationsForChild(req, res, next) {
        try {
            const {childId} = req.body;
            const child = await Children.findOne({
                _id: new ObjectId(childId)
            });
            const group = await Groups.findOne({
                _id: new ObjectId(child.groupId),
            });
            const organizations = await Organizations.find({
                _id: new ObjectId(group.orgId),
            }).toArray();

            return res.json({organizations});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }
}

module.exports = new OrganizationController();