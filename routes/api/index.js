const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtsRoutes = require('./thoughtsRoute');

//get ALL users 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
