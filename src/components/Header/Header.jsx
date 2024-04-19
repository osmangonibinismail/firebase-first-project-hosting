
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Header = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li className=" text-xl font-bold pr-20"><NavLink to='/'>OAI Speciality</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        {user && <>
            <li><NavLink to='/update'>update profile</NavLink></li>
            <li><NavLink to='/card/:id'>Card Details</NavLink></li>
            
        </>}


    </>


    return (
        <div className="navbar bg-slate-200 border-x-4 border-b-4 border-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img  alt="invalid" src={user?.photoURL? user?.photoURL:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" }/>
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-active btn-ghost">Log Out</button>
                        :
                        <Link to='/login'><button className="btn btn-active btn-ghost">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Header;