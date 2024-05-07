import { useContext } from "react";
import { DarkModeContext } from "../../../AuthProvider/DarkModeProvider";


const MoreSection = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className="my-10">
            <p className={`text-4xl font-bold text-center my-20`}>Frequently Asked Questions</p>
            <div>
                <div className={`collapse collapse-plus  `}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I use it for my clients?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt, eaque veniam ratione amet aspernatur! Consequatur asperiores voluptate rerum quisquam.</p>
                    </div>
                </div>
                <div className={`collapse collapse-plus  `}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is there a money back guarantee?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt, eaque veniam ratione amet aspernatur! Consequatur asperiores voluptate rerum quisquam.</p>
                    </div>
                </div>
                <div className={`collapse collapse-plus  `}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do I get free updates?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt, eaque veniam ratione amet aspernatur! Consequatur asperiores voluptate rerum quisquam.</p>
                    </div>
                </div>
                <div className={`collapse collapse-plus  `}>
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I use it for my clients?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt, eaque veniam ratione amet aspernatur! Consequatur asperiores voluptate rerum quisquam.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MoreSection;