const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  addReaction,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThoughts)//.post(createThoughts);
router.route('/:thoughtsId').get(getSingleThought);
router.route('/').post(createThoughts);
//add reaction to a thpught
router.route('/:thoughtId/reaction').post(addReaction);
// /api/thought/:thoughtsId
router.route('/:thoughtsId').put(updateThoughts);
//   .put(updateThoughts)
//   .delete(deleteThoughts);

module.exports = router;
