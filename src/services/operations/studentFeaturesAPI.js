import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";


const {COURSE_ENROLL} = studentEndpoints;



export async function enroll(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", COURSE_ENROLL, 
            {courses},
            {
                Authorization: `Bearer ${token}`,
            })

        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        
    }catch (error) {
        console.log("Enrollment ERROR.....", error);
        toast.error("Could not get enrolled");
    }
    toast.dismiss(toastId);
}

