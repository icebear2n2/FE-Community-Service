import MyHeader from "../components/MyHeader";
import {Outlet} from "react-router";
import MyFooter from "../components/MyFooter";

const Template = () => {
    return (
        <>
            <MyHeader />
            <Outlet />
            <MyFooter />
        </>
    )
}

export default Template;
