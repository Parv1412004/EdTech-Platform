const { mongoose } = require("mongoose");
const Category = require("../models/Category");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createCategory = async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllCategories = async (req, res) => {
	try {
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

//categoryPageDetails 



exports.categoryPageDetails = async (req, res) => {
    try {
      const { categoryId } = req.body
      if(!categoryId){
          return res.status(300).json({
            success:false
          })
      }
      console.log("PRINTING CATEGORY: ", categoryId);
      
      const categoryObjectId = new mongoose.Types.ObjectId(categoryId);
      
      console.log("PRINTING CATEGORY ID: ", categoryObjectId);
      
      // Get courses for the specified category
      const selectedCategory = await Category.findById(categoryObjectId)
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: "ratingAndReviews",
        })
        .exec()
  
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({ success: false, message: "Category not found" })
      }

      if (selectedCategory.courses.length === 0) {
        console.log("No courses found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No courses found for the selected category.",
        })
      }
  
      // Get courses for other categories
      const categoriesExceptSelected = await Category.find({
        _id: { $ne: categoryObjectId },
      })

      // Initialize differentCategory as null
      let differentCategory = null;

      // Only try to get different category if there are other categories
      if (categoriesExceptSelected && categoriesExceptSelected.length > 0) {
        const randomIndex = getRandomInt(categoriesExceptSelected.length);
        const randomCategory = categoriesExceptSelected[randomIndex];
        
        if (randomCategory && randomCategory._id) {
          differentCategory = await Category.findOne(randomCategory._id)
            .populate({
              path: "courses",
              match: { status: "Published" },
            })
            .exec()
        }
      }

      // Get top-selling courses across all categories
      const allCategories = await Category.find()
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: {
            path: "instructor",
        },
        })
        .exec()
      const allCourses = allCategories.flatMap((category) => category.courses)
      const mostSellingCourses = allCourses
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 10)

      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
          mostSellingCourses,
        },
      })
    } catch (error) {
      console.error("Error details:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}