import React from "react";
import { ImHome3 } from "react-icons/im";
import { MdPeopleAlt } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const Header = () => {

  const dispatch = useDispatch()

  return (
    <div className="border-b-2 bg-white fixe top-0 w-full fixed z-40">
      <div className="container md:w-[84%] w-[80%] mx-auto h-12 pt-8 pb-7 flex justify-between">
        <div className="flex h-[100%] w-full items-center">
          {/* svg + input Search */}
          <div className="flex">
            <a
              href="/"
              id="ember15"
              className="text-[#0a66c2] ml-"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                className="global-nav__logo"
              >
                <title>LinkedIn</title>
                <g>
                  <path
                    d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </a>
            <div className="border rounded overflow-hidden flex flex-row-reverse mr-2 md:mr-6">
              <input
                type="text"
                className="px-4 py-2 h-[100%] lg:w-[280px] md:w-[140px] w-[180px] bg-sky-50 focus:outline-none transition-all duration-300 focus:scale-x-125 focus:text-sm"
                placeholder="بحث"
              />
              <span className="py-2 px-4 r-1 borderl bg-sky-50">
                <svg
                  className="h-4 w-4 -ml-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </span>
            </div>
          </div>
          {/* Start Links  */}
          <div className="flex lg:mr -10 items-center md:justify-end justify-between  md:w-[60%] w-[100%] absolute -bottom-[88vh] ll left-[50%] -translate-x-1/2 translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-x-0 md:translate-y-0 md:bg-transparent bg-gray-200 pr-6 md:px-0 md:py-0 py-2 pb-8 rounded-md">
            <a
              className="md:w-20 w-10 flex flex-col items-center py-2 md:px-2 lg:px-4 px-6 nav bef"
              href="/"
            >
              <ImHome3 className="text-xl mb-1" />
              <span className="text-sm whitespace-nowrap ">
                Home Page
              </span>
            </a>
            <a
              className="md:w-20 w-10 flex flex-col items-center py-2 md:px-2 lg:px-4 px-6 nav bef"
              href="/"
            >
              <MdPeopleAlt className="text-xl mb-1" />
              <span className="text-[sm] ">Network</span>
            </a>
            <a
              className="md:w-20 w-10 flex flex-col items-center py-2 md:px-2 lg:px-4 px-6 nav bef"
              href="/"
            >
              <FaSuitcase className="text-xl mb-1" />
              <span className="text-sm ">Jobs</span>
            </a>
            <a
              className="md:w-20 w-10 flex flex-col items-center py-2 md:px-2 lg:px-4 px-6 nav bef"
              href="/"
            >
              <BsFillChatDotsFill className="text-xl  mb-1" />
              <span className="text-sm ">Messages</span>
            </a>
            <a
              className="md:w-20 w-10 flex flex-col items-center py-2 md:px-2 lg:px-4 px-4 nav bef ml-2"
              href="/"
            >
              <span aria-label="navigations" className="text-xl " href="/">
                <svg
                  viewBox="0 0 28 28"
                  alt=""
                  className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 q66pz984"
                  fill="currentColor"
                  height="20"
                  width="20"
                >
                  <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                </svg>
              </span>
              <span className="text-sm ">nav</span>
            </a>
            {/*  */}
            <div onClick={_ => dispatch(logout()) } className="flex flex-col justify-center items-center transition-all duration-200 text-zinc-600 hover:text-black hover:font-semibold cursor-pointer border-l-2 border-gray-200 md:relative md:top-0 absolute -top-[87.5vh] left-10 md:ml-[-6.5rem]">
              <img className="rounded-full w-[32px] h-[32px] mr-6"
                src='https://via.placeholder.com/150' alt="" />
              <span className="md:flex items-center justify-between mb-1 hidden">
                {" "}
                <span className="mr-6">me</span>
                <RiArrowDownSFill className="ml-4 mr-1 text-xl" />
              </span>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
