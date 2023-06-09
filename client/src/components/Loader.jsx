import React from "react";
import { loader } from "../assets";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-10 h-screen bg-black bg-opacity-70 flex items-center justify-center flex-col">
            <img
                className="w-[100px] h-[100px] object-contain"
                src={loader}
                alt="loader"
            />
            <p className="mt-[20px] font-epilogue font-bold text-white text-[20px] text-center">
                Transaction is in progress <br /> Please wait...
            </p>
        </div>
    )
}

export default Loader