import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCourses = () => {
    const {data:courses=[],refetch} = useQuery({
        queryKey:['course'],
        queryFn: async ()=>{
            const data = await axios.get('https://summry-camp-school-server.vercel.app/course')
            return data.data
        }
    })
    return [courses,refetch]
};

export default useCourses;