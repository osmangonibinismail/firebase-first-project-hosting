import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <Header></Header>
                <div className='min-h-[calc(100vh-116px)] border border-indigo-600'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;