const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,

} = require('../../controllers/userController');

// /api/user
// router.route('/').get(getUser);

// // /api/user/:userId
router.route('/:userId').get(getSingleUser);
router.route('/user').post(createUser);
// // /api/user/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// // /api/user/:studentId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
