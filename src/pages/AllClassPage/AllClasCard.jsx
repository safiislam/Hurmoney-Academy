/* eslint-disable react/prop-types */


const AllClasCard = ({ item }) => {
    const { courseImg, courseName, availableSeats, totalEnroll, price,instractorName,instractorEmail } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="relative">
                    <p className="bg-black text-white inline-block absolute px-3 rounded">price: {price}</p>
                    <figure><img className="h-[300px] w-full rounded-b" src={courseImg} alt="class img" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>

                    <div className="flex ">
                        <p>Avilabele {availableSeats}</p>
                        <p>Enroll : {totalEnroll}</p>
                    </div>
                    <div>
                        <p>Instractior : {instractorName}</p>
                        <p>Instractior Email: {instractorEmail} </p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClasCard;