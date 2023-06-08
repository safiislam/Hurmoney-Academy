/* eslint-disable react/prop-types */


const HeaderSec = ({title,discription}) => {
    return (
        <div className="text-center  text-black py-20">
            <p className="text-xl md:text-4xl font-bold">{title}</p>
            <p>{discription}</p>
        </div>
    );
};

export default HeaderSec;