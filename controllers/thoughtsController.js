const { Thought } = require('../models');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const createThoughts = ('../routes/api/thoughtsRoute');

module.exports = {
  // Get all THOUGHTS
  async getThoughts(req, res) {
    try {
      const thoughtsData = await Thought.find();
      res.status(200).json(thoughtsData);
    } catch (err) {
      res.status(500).json(err);
      console.log("err", err);
    }
  },
//   // Get a s SINGLE thought NO SIRVE 
  async getSingleThought(req, res) {
    try {
      console.log("entro")
      const thought = await Thought.findOne({ _id: req.params.thoughtsId })
      .select('-__v');

      console.log("req.params", req.params)

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({
        thought: await Thought(req.body),
      });
    } catch (err) {
      console.log("error", err)
      res.status(500).json(err);
    }
  },
//   // Create a thought
    async createThoughts(req, res) {
    try {
        const thoughtData = await Thought.create(req.body);
        res.json(thoughtData);
      } catch (err) {
        res.status(500).json(err);
        console.log("error:", err);
      }
    },

    //add reaction
    async addReaction(req, res) {
   console.log("addreaction")
      try {
        const reaction = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body }}, //$pull: actividad 26 DELete app y 28 studnts controller remove assig
          { runValidators: true, new: true }
        );
        console.log(reaction);
        console.log(req.body);
  
    
        if (!reaction) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }
  
        res.json(reaction);
      } catch (err) {
        console.log("err;", err)
        res.status(500).json(err);
      }
    },
  // Delete a reaction
  // async deleteReaction(req, res) {
  //   try {
  //     const delReaction = await Thought.findOneAndRemove({ _id: req.params.reactionId });

  //     if (!delReaction) {
  //       return res.status(404).json({ message: 'No reaction exists' });
  //     }

  //     const course = await Thought.findOneAndUpdate(
  //       { students: req.params.studentId },
  //       { $pull: { students: req.params.studentId } },
  //       { new: true }
  //     );

  //     if (!course) {
  //       return res.status(404).json({
  //         message: 'Student deleted, but no courses found',
  //       });
  //     }

  //     res.json({ message: 'Student successfully deleted' });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // },
//   // Update a thought by id
  async updateThoughts(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $addToset: {thought: req.body.thoughtText }},
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
