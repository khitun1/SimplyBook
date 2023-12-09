const {Users, Organizations, Groups} = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const apiError = require("../error/apiError");
const {ObjectId} = require("mongodb");

const generateJwtToken = (id, name, login, role, balance = undefined) => {
    return jwt.sign({
        id,
        name,
        login,
        role,
        balance,
    },
    process.env.SECRET_KEY,
        {
            expiresIn: '24h'
        }
    )
}


class UserController {
    async auth(req, res, next) {
        try {
            const {id} = req.body;
            const user = await Users.findOne({_id: id});
            const token = generateJwtToken(user._id, user.name, user.login, user.role, user.balance);
            return res.json({token});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async signUp(req, res, next) {
        try {
            const {name, login, password, role} = req.body;
            let user = await Users.findOne({login});
            if (user) {
                return next(apiError.badRequest('Пользователь с таким логином уже есть!'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            await Users.insertOne({name, login, hashPassword, role});
            user = await Users.findOne({login});
            const token = generateJwtToken(user._id, name, login, role);
            return res.json({token});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async create(req, res, next) {
        try {
            const {name, login, password, role, orgId} = req.body;
            let user = await Users.findOne({login});
            if (user) {
                return next(apiError.badRequest('Пользователь с таким логином уже есть!'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            await Users.insertOne({name, login, hashPassword, role});
            user = await Users.findOne({login});
            await Organizations.updateOne({_id: new ObjectId(orgId)}, {
                $push: {
                    users: user._id,
                }
            })
            return res.send('User have created');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async signIn(req, res, next) {
        try {
            const {login, password} = req.body;
            const user = await Users.findOne({login});
            if (!user) {
                return res.send('Неверный логин или почта');
            }
            const comparePassword = bcrypt.compare(password, user.hashPassword);
            if (!comparePassword) {
                return res.send('Неверный пароль');
            }
            const token = generateJwtToken(user._id, user.name, user.login, user.role, user.balance);
            return res.json({token, role: user.role});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async exclude(req, res, next) {
        try {
            const {id, orgId} = req.body;
            await Users.deleteOne({_id: new ObjectId(id)});
            await Organizations.updateOne({_id: new ObjectId(orgId)}, {
                $pull: {
                    users: new ObjectId(id),
                }
            })
            // await Users.updateOne({_id: new ObjectId(id)}, {
            //     $set: {
            //         excluded: true,
            //     }
            // });
            return res.send('User have excluded');
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getTeachers(req, res, next) {
        try {
            const {orgId} = req.body;
            const users = await Users.find().toArray();
            const org = await Organizations.findOne({_id: new ObjectId(orgId)});
            let teachers = [];

            for (let i = 0; i < org.users.length; i++) {
                let groupsForTeachers = [];
                let user = await Users.findOne(
                        {
                            $and: [
                                {
                                    _id: org.users[i]
                                },
                                {
                                    role: 'Teacher',
                                }
                            ]
                        });
                if (user) {
                    const groups = await Groups.find({
                        teachersId: new ObjectId(user._id)
                    }).toArray();
                    groups.forEach(p => {
                        const obj = {_id: p._id, name: p.name};
                        groupsForTeachers.push(obj);
                    });
                    user.groups = groupsForTeachers;
                    teachers.push(user);
                }
            }
            return res.json({teachers});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }

    async getClients(req, res, next) {
        try {
            const {orgId} = req.body;
            const org = await Organizations.findOne({_id: new ObjectId(orgId)});
            let clients = [];

            for (let i = 0; i < org.users.length; i++) {
                let user = await Users.findOne(
                    { $and: [
                            {
                                _id: org.users[i]
                            },
                            {
                                role: 'Client',
                            }
                        ]
                    }
                );
                if (user) {
                    clients.push(user);
                }
            }
            return res.json({clients});
        } catch (e) {
            return next(apiError.internal(e.message));
        }
    }
}

module.exports = new UserController();