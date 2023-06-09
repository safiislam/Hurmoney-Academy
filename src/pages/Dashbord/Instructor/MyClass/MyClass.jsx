import { Link } from "react-router-dom";
import useInstractorClass from "../../../../hooks/useInstractorClass";



const MyClass = () => {
    const [instructorClass,] = useInstractorClass()
    
    return (
        <div>
            <p className="text-center text-4xl font-bold mt-5" >My class</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Email</th>
                                <th>Total Enroll</th>
                                <th>Status</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                instructorClass.map((item,index) => <tr key={item._id} className="bg-base-200">
                                    <th>{index + 1 }</th>
                                    <td>{item.courseName}</td>
                                    <td>{item.instractorEmail}</td>
                                    <td>{item.totalEnroll}</td>
                                    <td>{item.status}</td>
                                    <td><Link to={`/dashbord/updateClass/${item._id}`}><button  className="btn btn-secondary">Update</button></Link></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;