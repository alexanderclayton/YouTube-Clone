//import//
import { useState } from "react";
import { AiOutlineMenu, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Sidedrawer } from "./Sidedrawer";

export const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav: React.MouseEventHandler<HTMLDivElement> = () => {
    setNav(!nav);
  };

  return (
    <div className="flex h-[56px] w-full">
      <div
        className={
          nav
            ? "scroll fixed h-screen w-[240px] translate-x-0 border bg-white transition duration-500 ease-in-out"
            : "east-in-out fixed translate-x-[-100%] duration-500"
        }
      >
        <div className="flex h-[56px] w-full items-center pl-2">
          <div className="rounded-full hover:bg-gray-300">
            <AiOutlineMenu
              onClick={handleNav}
              size={35}
              className="px-2 hover:cursor-pointer"
            />
          </div>
          <div className="flex items-center px-4 hover:cursor-pointer">
            <AiFillYoutube size={30} className="text-red-600" />
            <h1 className="font-bold">YouTube</h1>
          </div>
        </div>
        <Sidedrawer />
      </div>
      <div className="flex items-center pl-2">
        <div className="rounded-full hover:bg-gray-300">
          <AiOutlineMenu
            onClick={handleNav}
            size={35}
            className="px-2 hover:cursor-pointer"
          />
        </div>
        <div className="flex items-center px-4 hover:cursor-pointer">
          <AiFillYoutube size={30} className="text-red-600" />
          <h1 className="font-bold">YouTube</h1>
        </div>
      </div>
      <div className="flex w-full items-center justify-end sm:justify-center">
        <form className=" hidden sm:flex sm:min-w-[260px] sm:rounded-full sm:border md:min-w-[60%]">
          <input
            className="ml-4 w-[100%]"
            type="text"
            placeholder="Search Videos..."
          />
          <button className="inherit w-[55px] bg-gray-200 p-2 hover:bg-gray-300">
            <AiOutlineSearch size={24} />
          </button>
        </form>
        <button className="ml-2 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300 sm:hidden sm:bg-gray-200">
          <AiOutlineSearch size={24} />
        </button>
        <div className="ml-2 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300 sm:bg-gray-200">
          <BsFillMicFill size={24} className="p-1" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="m-3 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300">
          <RiVideoAddLine size={24} />
        </div>
        <div className="mr-1 rounded-full p-2 hover:cursor-pointer hover:bg-gray-300">
          <CiBellOn size={24} />
        </div>
        <RxAvatar size={55} className="pl-2 pr-4 hover:cursor-pointer" />
      </div>
    </div>
  );
};
