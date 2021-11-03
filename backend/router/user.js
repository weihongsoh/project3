const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
// const bcrypt = require("bcrypt")
const auth = require('../middleware/auth')
const session = require("express-session")

// // Login check
router.post('/login', async (req, res) => {
  const user = await UserModel.find({ username: req.body.username })
  const enteredPassword = req.body.password
  console.log("user..", user)
  // console.log("req..", req.body.password)
  // console.log("user..", user[0].password)

  try {
    if (enteredPassword === user[0].password) {
      req.session.auth = true

      req.session.userObject = user[0]
      // console.log("userobj", req.session.userObject)
      // console.log(req.session.userObject.username)
      // ways to use req session
      // req.session.userObj.username = "Desmond"

      // console.log(req.session)
      res.json({ status: 'ok', msg: 'you are logged in', user: user[0] })
      console.log("passwords match")
    } else {
      req.session.auth = false
      res
        .status(403)
        .json({ status: "unauthorised", msg: "you are not logged in" })
      console.log("passwords do not match")
    }

  } catch (error) {
    req.session.auth = false
    res
      .status(403)
      .json({ status: "unauthorised", msg: "you are not logged in" })
    console.log("User not found")

  }



  // if (user === []) {
  //   console.log("User not found")
  // } else {

  //   if (enteredPassword === user[0].password) {
  //     req.session.auth = true

  //     req.session.userObject = user[0]
  //     // console.log("userobj", req.session.userObject)
  //     // console.log(req.session.userObject.username)
  //     // ways to use req session
  //     // req.session.userObj.username = "Desmond"

  //     // console.log(req.session)
  //     res.json({ status: 'ok', msg: 'you are logged in', user: user[0] })
  //     console.log("passwords match")

  //   } else {
  //     req.session.auth = false
  //     res
  //       .status(403)
  //       .json({ status: "unauthorised", msg: "you are not logged in" })
  //     console.log("passwords do not match")
  //   }
  // }




})


// NEED TO ADD BACK AUTH, ASYNC ...
//
// Find user profile (CURRENTLY USED FOR SEEDING TEST, TO BE UPDATED)
router.get("/find", async (req, res) => {
  try {
    console.log("rsu", req.session.userObject)
    // const user = await UserModel.find({ username: req.body.username })
    // res.json({ user });
  } catch (error) {
    res.json({ status: "not ok", msg: "user not found" });
  }
})

// Find user profile 2
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await UserModel.find({ username: req.params.id })
//     console.log("userprofile2 :", user)
//     res.json({ user: user[0] });
//   } catch (error) {
//     res.json({ status: "not ok", msg: "user not found" });
//   }
// })

// Find user profile 3
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
    console.log("userprofile2 :", user)
    res.json(user);
  } catch (error) {
    res.json({ status: "not ok", msg: "user not found" });
  }
})


// New user profile
router.post("/create", async (req, res) => {
  console.log(req.body)
  await UserModel.create(req.body);

  res.json({ status: "ok", msg: "created" })
})

// Update user profile
router.put("/update", async (req, res) => {
  console.log("between put")

  await UserModel.updateOne(
    {
      username: req.body.username,
    },
    // password: password,
    // targetCalories: calories,
    // targetCarbohydrates: carbohydrates,
    // targetProtein: protein,
    // targetFats: fats,
    // currentWeight: currentWeight,
    // targetWeight: targetWeight,
    {
      // username: req.body.newUsername,
      password: req.body.password,
      targetCalories: req.body.targetCalories,
      targetCarbohydrates: req.body.targetCarbohydrates,
      targetProtein: req.body.targetProtein,
      targetFats: req.body.targetFats,
      currentWeight: req.body.currentWeight,
      targetWeight: req.body.targetWeight,
    }
  )
  // await user.save()

  res.json({ status: "ok", msg: "updated" })
})

// Remove user account (to close account)
// Do we really need?
router.delete("/delete", async (req, res) => {
  const { name } = req.body;
  await UserModel.deleteOne({ name })

  res.json({ status: "ok", msg: "deleted" })
})

// SEED TESTING - START - TO COMMENT-OUT/DELETE
router.get('/seed', async (req, res) => {
  // await UserModel.deleteMany({})

  await UserModel.create(
    [
      {
        username: "Alex",
        password: "123",
        targetCalories: 2152,
        targetCarbohydrates: 242,
        targetProtein: 161,
        targetFats: 60,
        currentWeight: 78,
        targetWeight: 70
      },
      {
        username: "Iman",
        password: "456",
        targetCalories: 99,
        targetCarbohydrates: 99,
        targetProtein: 99,
        targetFats: 99,
        currentWeight: 99,
        targetWeight: 99
      },
      {
        username: "Wei Hong",
        password: "789",
        targetCalories: 99,
        targetCarbohydrates: 99,
        targetProtein: 99,
        targetFats: 99,
        currentWeight: 99,
        targetWeight: 99
      }
    ],
    (err, data) => {
      res.json({ status: "ok", msg: "seeded" })
      // res.redirect("/nutrition/user")
    }
  );
});
// SEED TESTING - END - TO COMMENT-OUT/DELETE

module.exports = router;
