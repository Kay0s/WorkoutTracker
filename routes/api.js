const db = require("../models");

module.exports = (app) => {
  // getLastWorkout()
  app.get("/api/workouts", async (_req, res) => {
    const workout = await db.Workout.find({})
      .sort({ _id: -1 })
      .catch((err) => {
        res.status(404).json(err);
      });
    res.json(workout);
  });

  // addExercise(data)
  app.put("/api/workouts/:id", async (req, res) => {
    console.log("put", req.body);
    const exercise = await db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { exercise: [{ ...req.body.exercise }] }
    ).catch((err) => {
      console.error(err);
      res.json(err);
    });
    res.json(exercise);
  });

  // createWorkout(data)
  app.post("/api/workouts", async ({ body }, res) => {
    const workout = await db.Workout.create(body).catch((err) => {
      console.error(err);
      res.json(err);
    });
    console.log(workout);
    res.json(workout);
  });

  // getWorkoutInRange()
  // app.get("/api/workouts/range", async (req, res) => {
  //   db.Workout.find({}).sort({ _id: -1 });
  //   await ((dbWorkout) => {
  //     res.json(dbWorkout);
  //   }).catch((err) => {
  //     res.status(404).json(err);
  //   });
  // });
};
