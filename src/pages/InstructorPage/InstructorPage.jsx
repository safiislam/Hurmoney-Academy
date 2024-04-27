import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstractorCard from "../../components/instractorCard/InstractorCard";
import { useState } from "react";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";


const InstructorPage = () => {
    const [instarctorIsLoading,setInstarctorIsLoading] = useState(false)
    const { data: instructorData = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            setInstarctorIsLoading(true)
            const data = await axios.get('https://summry-camp-school-server.vercel.app/instructor')
            setInstarctorIsLoading(false)
            return data.data
        }
    })
    if(instarctorIsLoading){
        return <LoadingComponent />
    }
    return (
        <>
            <div className="mt-20 grid gap-4 md:grid-cols-3 grid-cols-1">
                {/* {
                    instructorData.map(item => <div key={item._id} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Name :{item?.name}</h2>
                            <p>Email: {item?.email}</p>
                        </div>
                        <figure><img className="h-[250px] w-full" src={item?.url} alt="Shoes" /></figure>
                    </div>)
                } */}
                {
                    instructorData.map(data=>  <InstractorCard key={data._id}  data={data}  />)
                }
            </div>
            <div className="mt-20">
               
            </div>
        </>
    );
};

export default InstructorPage;