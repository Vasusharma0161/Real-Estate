import React from 'react'
import { NavLink } from 'react-router-dom';




function Navbar(prop) {
    return (
    <div className="z-30 flex md:hidden px-0 justify-center h-auto w-full overflow-hidden fixed top-0 py-0"><nav className="py-2 shadow align-middle bg-yellow-500 h-max w-full shadow flex justify-between px-10 py-0 align-middle">
            <div className="my-auto flex w-max text-white font-bold uppercase">
                {/* <img src={prop.img} className="mr-2 border-2 border-white w-6 h-6 rounded-full bg-cover" alt="" /> */}
                {prop.name}
            </div>
        <div className="my-auto flex list-none space-x-4 justify-evenly w-max my-auto align-middle">
            <NavLink to="/home" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[0]}</p></NavLink>
            {/* <NavLink to="/location"  className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[1]}</p></NavLink>
            <NavLink to="/price" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[2]}</p></NavLink>
            <NavLink to="/contact" className="hover:text-white focus:text-white text-white flex hover:bg-blue-400 transition focus:bg-blue-500 font-bold px-4 rounded-md py-1 uppercase space-x-2 my-auto align-middle"><p className="mb-0">{prop.navLink[3]}</p></NavLink> */}
            </div>
            <div className="py-2 my-auto flex list-none space-x-4 justify-evenly w-max">
            {/* <button className="text-white text-center hover:bg-blue-400 transition focus:bg-blue-500 font-bold w-10 h-10 rounded-full"><i className="fa fa-info my-auto align-middle mx-auto"></i></button> */}
        </div>
        </nav></div>
    );
};
export default Navbar;