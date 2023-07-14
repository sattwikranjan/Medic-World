const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorController,
} = require("../controllers/adminCtrl");

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorController);

module.exports = router;
