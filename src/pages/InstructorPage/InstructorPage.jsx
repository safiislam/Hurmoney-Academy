import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const InstructorPage = () => {
    const {data:instructorData=[]}=useQuery({
        queryKey:['instructor'],
        queryFn: async () =>{
            const data = await axios.get('https://summry-camp-school-server.vercel.app/instructor')
            return data.data
        }
    })
    return (
        <div className="mt-20 grid gap-4 md:grid-cols-3 grid-cols-1">
            {
                instructorData.map(item =><div key={item._id} className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Name :{item?.name}</h2>
                  <p>Email: {item?.email}</p>
                </div>
                <figure><img className="h-[250px] w-full" src={item?.url} alt="Shoes" /></figure>
              </div>)
            }
        </div>
    );
};

export default InstructorPage;