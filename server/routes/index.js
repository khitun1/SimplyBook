const express = require("express");
const router = express();
const userRouter = require('./userRouter');
const childRouter = require('./childRouter');
const groupRouter = require('./groupRouter');
const orgRouter = require('./orgRouter');
const planPaymentRouter = require('./planPaymentsRouter');
const visitsRouter = require('./visitsRouter');

router.use('/user', userRouter)
    .use('/child', childRouter)
    .use('/group', groupRouter)
    .use('/org', orgRouter)
    .use('/plan', planPaymentRouter)
    .use('/visit', visitsRouter)

module.exports = router;