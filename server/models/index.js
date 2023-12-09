const client = require('../db');

const Db = client.db('SimplyBook');

const Users = Db.collection('Users');

const Organizations = Db.collection('Organizations');

const Groups = Db.collection('Groups');

const Children = Db.collection('Children');

const Schedules = Db.collection('Schedules');

const Visits = Db.collection('Visits');

const Payments = Db.collection('Payments');

const PlanPayments = Db.collection('PlansPayments');

const Periods = Db.collection('Periods');



module.exports = {Users, Organizations, Groups, Children,
    Schedules, Visits, Payments, PlanPayments, Periods};

