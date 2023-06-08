import HeaderSec from "../../../components/HeaderSec";
import useCourses from "../../../hooks/useCourses";


const PopularClassSec = () => {
    const [courses,refetch]= useCourses()
    const data = courses.slice(0,6)
    return (
        <div>
            <HeaderSec title={'Popular Classes'} discription={'Discover popular music classes that inspire creativity and foster musical growth.'}/>
            {
                data.map(class=> )
            }
        </div>
    );
};

export default PopularClassSec;