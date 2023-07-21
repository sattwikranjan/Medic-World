const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//post get single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

router.get("/doctor-appointments",authMiddleware , doctorAppointmentsController);

//Post update Status
router.post("/update-status",authMiddleware,updateStatusController);

module.exports = router;
