const { Thought } = require('../models');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const createThoughts = ('../routes/api/thoughtsRoute');

module.exports = {
  // Get all THOUGTHS
  async getThoughts(req, res) {
    try {
      const thoughtsData = await Thought.find();
      res.status(200).json(thoughtsData);
    } catch (err) {
      res.status(500).json(err);
      console.log("err", err);
    }
  },
//   // Get a course
//   async getSingleCourse(req, res) {
//     try {
//       const course = await Course.findOne({ _id: req.params.courseId })
//         .populate('students');

//       if (!course) {
//         return res.status(404).json({ message: 'No course with that ID' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Create a thought
    async createThoughts(req, res) {
    try {
        const thoughtData = await Thought.create(req.body);
        res.json(thoughtData);
      } catch (err) {
        res.status(500).json(err);
        console.log("error:", err);
      }
    }
//   // Delete a course
//   async deleteCourse(req, res) {
//     try {
//       const course = await Course.findOneAndDelete({ _id: req.params.courseId });

//       if (!course) {
//         res.status(404).json({ message: 'No course with that ID' });
//       }

//       await Student.deleteMany({ _id: { $in: course.students } });
//       res.json({ message: 'Course and students deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Update a course
//   async updateCourse(req, res) {
//     try {
//       const course = await Course.findOneAndUpdate(
//         { _id: req.params.courseId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!course) {
//         res.status(404).json({ message: 'No course with this id!' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
 };
