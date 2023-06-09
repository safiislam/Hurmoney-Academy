import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllClasCard from "./AllClasCard";



const AllClassPage = () => {
    const {data: allClass=[]} = useQuery({
        queryKey:['allClass'],
        queryFn: async () =>{
            const data = await axios.get('https://summry-camp-school-server.vercel.app/allClass')
            return data.data
        }
    })
    return (
        <div>
            <div className="mt-16 grid grid-cols-3 gap-8">
                {
                    allClass.map(item=> <AllClasCard key={item._id} item={item}/> )
                }
            </div>
        </div>
    );
};

export default AllClassPage;