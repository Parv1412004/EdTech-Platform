import signupImg from "../assets/Images/pexels-julia-m-cameron-4144923.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join Us"
      description1=""
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup