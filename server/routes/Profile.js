const express = require("express")
const router = express.Router()
const { auth, isInstructor, isStudent } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
  gettingEnrolled,
  isEnrolled,
  courseProgress,
} = require("../controllers/Profile")
const CourseProgress = require("../models/CourseProgress")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)

// Getting Enrolled
router.post("/gettingEnrolled", auth, isStudent, gettingEnrolled);
router.post("/isEnrolled",auth,isStudent,isEnrolled)
router.post("/courseprogress",auth,isStudent,courseProgress);


// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router