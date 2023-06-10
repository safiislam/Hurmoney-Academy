import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Container from "../components/Container";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../AuthProvider/DarkModeProvider";


const MainLayOut = () => {
    const{darkMode} = useContext(DarkModeContext)
    console.log(darkMode)
    return (
        <div className={darkMode ? 'dark' : 'light'} >
            <Container>
                <Navber />
                <Outlet />
                <Footer />
            </Container>
        </div>
    );
};

export default MainLayOut;