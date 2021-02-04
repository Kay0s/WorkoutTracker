const db = require("../models");

module.exports = (app) => {
  // getLastWorkout()
  app.get("/api/workouts", async (req, res) => {
    db.Workout.find({}).sort({ _id: -1 });
    await ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.status(404).json(err);
    });
  });

  // addExcercise(data)
  app.post("/api/workouts", async ({ body }, res) => {
    db.Workout.create(body).then(({ _id }) =>
      db.Workout.findOneAndUpdate({}, { $push: { name: _id } }, { new: true })
    );
    await ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.json(err);
    });
  });
};
