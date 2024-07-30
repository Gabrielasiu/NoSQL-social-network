const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const { User } = require('../models/user');
const getSingleUser = ('../routes/api/userRoute');
const createUser = ('../routes/api/userRoute');

module.exports = {
  // Get all USERS
  // async User(req, res) {
  //   try {
  //     const user = await User.find();

  //     const studentObj = {
  //       user,
  //       headCount: await headCount(),
  //     };

  //     res.json(studentObj);
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json(err);
  //   }
  // },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const userId = mongoose.Types.ObjectId(req.params.userId);
      const user = await User.findOne({ _id: userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user,
        userName: await userName(req.body.userName),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body );
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
      console.log("error:", err);
    }
  }};
//   // Delete a student and remove them from the course
//   async deleteStudent(req, res) {
//     try {
//       const student = await Student.findOneAndRemove({ _id: req.params.studentId });

//       if (!student) {
//         return res.status(404).json({ message: 'No such student exists' });
//       }

//       const course = await Course.findOneAndUpdate(
//         { students: req.params.studentId },
//         { $pull: { students: req.params.studentId } },
//         { new: true }
//       );

//       if (!course) {
//         return res.status(404).json({
//           message: 'Student deleted, but no courses found',
//         });
//       }

//       res.json({ message: 'Student successfully deleted' });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // Add an assignment to a student
//   async addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);

//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $addToSet: { assignments: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove assignment from a student
//   async removeAssignment(req, res) {
//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
