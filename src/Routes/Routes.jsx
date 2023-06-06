import MainLayOut from "../Layout/MainLayOut";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut />
    }
])