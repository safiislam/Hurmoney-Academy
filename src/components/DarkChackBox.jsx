import { useContext,} from "react";
import { DarkModeContext } from "../AuthProvider/DarkModeProvider";

const DarkChackBox = () => {
    const {darkMode,toggleDarkMode} = useContext(DarkModeContext)
    // console.log(darkMode)
    console.log(toggleDarkMode)
    return (
        <div>
            <input type="checkbox" checked={darkMode} className="toggle"  onChange={toggleDarkMode} />
        </div>
    );
};

export default DarkChackBox;