const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,

} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers);

// // /api/user/:userId
router.route('/:userId').get(getSingleUser);

router.route('/user').post(createUser);
// // /api/user/:userId/friends
router.route('/:userId/friends/:friendsId').post(addFriend);

// // /api/user/:studentId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
