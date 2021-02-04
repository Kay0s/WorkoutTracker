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
  app.put("/api/workouts", async ({ body }, res) => {
    db.Workout.create(body).then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { exercise: _id } },
        { new: true }
      )
    );
    await ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.json(err);
    });
  });

  // createWorkout(data)
  app.post("/api/workouts", async ({ body }, res) => {
    db.Workout.create(body).then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { Workout: _id } },
        { new: true }
      )
    );
    await ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.json(err);
    });
  });

  // getWorkoutInRange()
  app.get("/api/workouts/range", async (req, res) => {
    db.Workout.find({}).sort({ _id: -1 });
    await ((dbWorkout) => {
      res.json(dbWorkout);
    }).catch((err) => {
      res.status(404).json(err);
    });
  });
};
