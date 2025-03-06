const mongoose = require('mongoose');
const Course = require("../models/Course")
const crypto = require("crypto")
const User = require("../models/User")
const CourseProgress = require("../models/CourseProgress");
const { console } = require('inspector');

exports.enrollStudents = async (req,res) => {
  try {
    const {courses} = req.body
    const userId = req.user.id
    console.log(userId,courses)
    if (!courses) {
      return res
        .status(400)
        .json({ success: false, message: "Please Provide Course ID" })
    }
    if (!userId) {
    return res
        .status(400)
        .json({ success: false, message: "Please Provide User ID" })
    }
    console.log(courses,userId,'y');
    // Convert string IDs to ObjectIds
    const courseId = new mongoose.Types.ObjectId(courses);
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Find the course and enroll the student in it
    const enrolledCourse = await Course.findOneAndUpdate(
      { _id: courseId },
      { $push: { studentsEnrolled: userObjectId } },
      { new: true }
    )

    if (!enrolledCourse) {
      return res
        .status(404)  // Changed to 404 since resource not found
        .json({ success: false, error: "Course not found" })
    }
    console.log("Updated course: ", enrolledCourse)

    const courseProgress = await CourseProgress.create({
      courseID: courseId,
      userId: userObjectId,
      completedVideos: [],
    })

    // Find the student and add the course to their list of enrolled courses
    const enrolledStudent = await User.findByIdAndUpdate(
      userObjectId,
      {
        $push: {
          courses: courseId,
          courseProgress: courseProgress._id,
        },
      },
      { new: true }
    )

    console.log("Enrolled student: ", enrolledStudent)
    
    if (!enrolledStudent) {
      return res
        .status(404)
        .json({ success: false, error: "User not found" })
    }

    return res.status(200).json({
      success: true,
      message: "Student enrolled successfully"
    })
    
  } catch (error) {
    console.error("Enrollment error:", error)
    return res.status(400).json({ 
      success: false, 
      error: error.message 
    })
  }
}