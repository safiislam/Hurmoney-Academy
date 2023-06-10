/* eslint-disable react/prop-types */

import { useContext } from "react";
import { DarkModeContext } from "../AuthProvider/DarkModeProvider";


const HeaderSec = ({title,discription}) => {
    const {darkMode}= useContext(DarkModeContext)
    return (
        <div className={`text-center ${darkMode ? 'text-white' :'text-black'}  py-20`}>
            <p className="text-xl md:text-4xl font-bold">{title}</p>
            <p>{discription}</p>
        </div>
    );
};

export default HeaderSec;