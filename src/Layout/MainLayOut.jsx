import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Container from "../components/Container";
import Footer from "../Shared/Footer";


const MainLayOut = () => {
    return (
        <Container>
            <Navber />
            <Outlet />
            <Footer />
        </Container>
    );
};

export default MainLayOut;