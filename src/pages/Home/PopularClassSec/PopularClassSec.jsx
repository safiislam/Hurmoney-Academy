import Card from "../../../components/Card";
import HeaderSec from "../../../components/HeaderSec";
import useCourses from "../../../hooks/useCourses";


const PopularClassSec = () => {
    const [courses] = useCourses()
    const data = courses.slice(0, 6)
    return (
        <div>
            <HeaderSec title={'Popular Classes'} discription={'Discover popular music classes that inspire creativity and foster musical growth.'} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    data.map(clas => <Card key={clas._id} itmes={clas} />)
                }
            </div>
        </div>
    );
};

export default PopularClassSec;