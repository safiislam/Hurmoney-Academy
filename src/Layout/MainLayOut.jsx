import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Container from "../components/Container";


const MainLayOut = () => {
    return (
        <Container>
            <Navber />
            <Outlet />
        </Container>
    );
};

export default MainLayOut;