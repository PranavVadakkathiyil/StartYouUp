import React from "react";
import SignupImage from "../assets/Signup.jpg";
import { FaGoogle,MdOutlineRemoveRedEye,LuEyeOff } from "../utils/icons.js";
const Signup = () => {
  return (
    <section className="w-full flex">
      <div className="w-1/2 sm:block hidden">
        <img src={SignupImage} alt="img" />
      </div>
      <div className="sm:w-1/2 flex items-center justify-center">
        <div className="sm:min-w-sm sm:m-0 m-3 border-4 border-r-8 border-r-[#F04C4B] border-t-[#F04C4B] border-b-8 border-b-[#3938B8] border-l-[#3938B8] sm:p-7 p-4  rounded-3xl bg-gray-50">
          <p className="text-center text-2xl font-bold">Login</p>
          <form action="" className="">
            <div className="">
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="border-3 outline-none w-full px-4 py-2  rounded-3xl font-semibold"
              />
            </div>
            <div className="">
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="text"
                placeholder="emial"
                className="border-3 outline-none w-full px-4 py-2  rounded-3xl font-semibold"
              />
            </div>
            <div className="">
              <label htmlFor="" className="block">
                Password
              </label>
              <div className="flex justify-between items-center border-3 w-full px-4 py-2  rounded-3xl font-semibold">
                <input
                  type="password"
                  placeholder="name"
                  className="outline-none"
                />
                <p><LuEyeOff className="text-xl"/></p>
              </div>
            </div>
            <div className="w-full text-right py-2">
              <p className="cursor-pointer text-gray-400 hover:text-gray-700">
                Login
              </p>
            </div>
            <div className="w-full text-center ">
              <button className="px-4 py-2 bg-[#FFD401] text-black rounded-md">
                Submit
              </button>
            </div>

            <p className="text-center py-4 ">or</p>
            <div className="w-full flex items-center justify-center">
              <p title="login with google">
                <FaGoogle className="text-2xl" />
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
