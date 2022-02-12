// import axios from 'axios';
import React from 'react'
import { Switch, Route, Redirect, useHistory, useParams } from "react-router-dom";
const Job = (prop) => {
    const { id } = useParams()
    return (
        <>

        <a href={prop.link} className="w-max hover:text-white focus:text-white inline-block mx-2 my-10 transition transform bg-blue-100 focus:bg-black hover:bg-yellow-300 hover:scale-95 motion-safe:transform-none w-max rounded-xl text-blue-500 overflow-hidden">
                    <div className="overflow-hidden"><img src={prop.img} className="w-64 h-64  bg-cover" alt="" /></div>
                    <div className="border-t-8 border-blue-300 flex space-y-10 justify-center">
                    <div className="">
                        <div className="font-bold w-full text-cente align-middle"><h1 className="py-2 my-auto mx-auto text-center">{prop.title}</h1></div>
                        <div className="font-bold w-full text-cente align-middle"><p className="py-2 my-auto mx-auto text-center">{prop.location}</p></div>
                        <div className="font-bold w-full text-cente align-middle"><p className="py-2 my-auto mx-auto text-center">{prop.description}</p></div>
                    </div>
                </div>
                <div className="px-3"><div className="font-bold mt-3 w-full mx-auto text-center bg-yellow-500 rounded-full px-4 text-white"><p>{prop.price}</p></div></div>
                </a>
            </>
    );
}
export default Job;