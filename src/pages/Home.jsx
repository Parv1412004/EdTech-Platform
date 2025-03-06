// Image and Video Import
import studentlearning from "../assets/Images/student_learning.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"


function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">

        {/* Heading */}
        <div className="text-center text-4xl font-semibold pt-20">
          Empower Your Future with
          <HighlightText text={"Engineering Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className=""
            muted
            loop
            autoPlay
          >
            <source src={studentlearning} type="video/mp4" />
          </video>
        </div>
      </div>
      

      {/* Section 2 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home