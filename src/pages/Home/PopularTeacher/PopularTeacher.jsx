import { useQuery } from "@tanstack/react-query";
import HeaderSec from "../../../components/HeaderSec";
import axios from "axios";
import { useContext } from "react";
import { DarkModeContext } from "../../../AuthProvider/DarkModeProvider";


const PopularTeacher = () => {
    const { darkMode } = useContext(DarkModeContext)
    const { data: instructorData = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const data = await axios.get('https://summry-camp-school-server.vercel.app/instructor')
            return data.data
        }
    })
    const filter = instructorData.slice(0, 6)
    return (
        <div>
            <HeaderSec title={'Popular Teacher'} discription={"Experienced music teacher nurturing students' passion and unlocking their potential"} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {
                    filter.map(item => <div key={item._id} className={`card w-full ${darkMode ? 'bg-black text-white border rounded' : 'bg-base-100'} shadow-xl`}>
                        <div className="card-body">
                            <h2 className="card-title">Name: {item.name}</h2>
                            <p>Email: {item.email}</p>
                        </div>
                        <figure><img className="h-[250px] w-full" src={item?.url} alt="Shoes" /></figure>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularTeacher;