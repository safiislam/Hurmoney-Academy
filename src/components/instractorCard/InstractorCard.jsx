
import './InstractorCard.css'
const InstractorCard = ({ data }) => {
    const { url, name, email } = data
    return (
        <div className="instractor_container">
            <div className="instractor_card ">
                <div className="instractor_slide slide1">
                    <div className="instractor_content">
                        <div className="icon">
                            <img className='h-[350px] rounded-lg hover:rounded-b-none w-[405px]' src={url} alt="" />
                        </div>
                    </div>
                </div>
                <div className="instractor_slide slide2 hover:rounded-b-lg w-full">
                    <div className="content text-center  ">
                        <h3>
                            {name}
                        </h3>
                        <p>Email : {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractorCard;