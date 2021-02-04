const db = require("../models");

module.exports = (app) => {
  // getLastWorkout()
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ _id: -1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  });
};
