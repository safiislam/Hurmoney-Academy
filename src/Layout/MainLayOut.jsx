import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Container from "../components/Container";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../AuthProvider/DarkModeProvider";
import CustomCursor from "../components/CustomCursor/CustomCursor";


const MainLayOut = () => {
    const { darkMode } = useContext(DarkModeContext)
    console.log(darkMode)
    return (
        <div>
            <Navber />
            <Container>
                <div className="min-h-[calc(100vh - 90px)] mt-8 ">
                    <Outlet />
                </div>
            </Container>
            <Footer />
            <CustomCursor />
        </div>
    );
};

export default MainLayOut;