import React from 'react'
import { NavLink } from 'react-router-dom';




function Nav(prop) {
    return (
        <div className="z-10 hidden md:flex px-0 justify-center h-auto w-full overflow-hidden fixed top-0 py-0">
            <nav className="bg-yellow-500 shadow py-2 align-middle h-max w-full flex justify-between px-10 py-0 align-middle">
            <a href="/" className="align-middle text-white">
                <div className=" h-max flex-col justify-center align-middle my-auto flex w-max text-white font-bold uppercase">
                    <div className="my-auto flex list-none space-x-4 justify-evenly w-max my-auto align-middle">
                        {/* <img src={prop.img} className="my-auto mr-2 border-2 border-white w-6 h-6 rounded-full bg-cover" alt="" /> */}
                        <p className="my-auto align-middle mt-1 ">{prop.name}</p>
                    </div>
                </div>
            </a>
        <div className="my-auto flex list-none space-x-4 justify-evenly w-max my-auto align-middle">
            <NavLink to="/home" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[0]}</p></NavLink>
            <NavLink to="/location"  className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[1]}</p></NavLink>
            <NavLink to="/price" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[2]}</p></NavLink>
            <NavLink to="/contact" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[3]}</p></NavLink>
            </div>
            <div className="my-auto flex list-none space-x-4 justify-evenly w-max">
            <NavLink to="/about" className="text-white text-center hover:bg-blue-400 transition focus:bg-blue-500 font-bold w-8 h-8 rounded-full"><i className="fa fa-info my-auto align-middle mx-auto"></i></NavLink>
        </div>
        </nav></div>
    );
};
export default Nav;